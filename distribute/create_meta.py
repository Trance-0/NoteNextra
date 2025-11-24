"""
This script is used to generate _meta.js file for microservice deployment for this project.

We will use nginx to route traffic to different microservices. 
Each microservice will have its own _meta.js file, run prebuild.sh to replace _meta.js 
before building the microservice.

This script should run when you add a new microservice (add course for your note)

"""

# easy python script to create meta file for each subdirectory to replace

import os
import json
from pathlib import Path
import re

cwd = Path(os.path.dirname(os.path.abspath(__file__)))
root_dir=Path.joinpath(cwd.parent, 'content')
# consider each subdirectory as a course
sub_dirs=os.listdir(root_dir)
# exclude .md and _meta.js
exclude_reg=r'(\.md|_meta.js)'
sub_dirs=[x for x in sub_dirs if not re.search(exclude_reg, x)]
print (sub_dirs)
meta_file = os.path.join(root_dir, '_meta.js')

# auto generate meta files
course_match=r"(\w+\d+.*)\s*:\s*(\{\s+.+\s+.+)\s+.+\s+.+\s+.+\s+(\},)"
link_parse=r"\1_link: \2\n      href: '/\1'\n    \3"
link_match=r"_link\s*:\s*(\{\s+.+\s+.+)\s+.+\s+.+\s+.+\s+(\},)"
course_parse=r":\1\n      theme:{\n        timestamp: true,\n      }\n    \2"

# copy new _meta.js
for sub_dir in sub_dirs:
    sub_meta_file=os.path.join(cwd, sub_dir, '_meta.js')
    full_text=Path(meta_file).read_text()
    matches=re.findall(course_match, full_text)
    new_text=re.sub(course_match, link_parse, full_text)
    print(f'parsed link file: {new_text}')
    cur_link_match=r'{}{}'.format(sub_dir,link_match)
    cur_course_match=r'{}{}'.format(sub_dir,course_parse)
    print(f'new reg: {cur_link_match}, {cur_course_match}')
    new_text=re.sub(cur_link_match, cur_course_match, new_text)
    print (f'parsed course file: {new_text}')
    # create directory if not exist
    Path(sub_meta_file).parent.mkdir(parents=True, exist_ok=True)
    Path(sub_meta_file).write_text(new_text)
