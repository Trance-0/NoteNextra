"""
This file is used to wrap the html files in the local directory into md files.

Make them renderable in the website.
"""

import os
import re

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

def wrap_html_files(file_name):
    with open(os.path.join(BASE_DIR, file_name), "r", encoding="utf-8") as f:
        content = f.read()
    with open(os.path.join(BASE_DIR, file_name.replace(".html", ".md")), "w", encoding="utf-8") as f:
        f.write(content)
    os.remove(os.path.join(BASE_DIR, file_name))

def parse_html_file(file_name):
    if not file_name.endswith(".md"):
        raise ValueError("File name should end with .md")
    with open(os.path.join(BASE_DIR, file_name), "r", encoding="utf-8") as f:
        content = f.read()
    with open(os.path.join(BASE_DIR, file_name), "w", encoding="utf-8") as f:
        # remove doctype
        content = re.sub(r"<!DOCTYPE html>", "", content, flags=re.DOTALL)
        # remove meta tags
        content = re.sub(r"<meta.*?>", "", content, flags=re.DOTALL)
        # remove title
        content = re.sub(r"<title>.*?</title>", "", content, flags=re.DOTALL)
        # remove the <script> tags
        content = re.sub(r"<script>.*?</script>", "", content, flags=re.DOTALL)
        # remove the <style> tags
        content = re.sub(r"<style>.*?</style>", "", content, flags=re.DOTALL)
        # parse math-in-line
        content = re.sub(r'<span class="math inline">\\\((.*?)\\\)</span>', r'$\1$', content)
        # parse math display
        content = re.sub(r'<span class="math display">\\\[(.*?)\\\]</span>', r'$$\1$$', content)
        f.write(content)

# for file in os.listdir(BASE_DIR):
#     if file.endswith(".html"):
#         wrap_html_files(file)
#     elif file.endswith(".md"):
#         parse_html_file(file)

# wrap_html_files("Lecture_1.html")

for i in range(1, 41):
    with open(os.path.join(BASE_DIR, f"Lecture_{i}.mdx"), "w", encoding="utf-8") as f:
        f.write("<div style={{ width: '100%', height: '25px'}}></div><iframe src=\"https://notenextra.trance-0.com/Math3200/Lecture_"+str(i)+".html\" title=\"Math 3200 Lecture "+str(i)+"\" style={{ width: '100%', height: '100vh', border: 'none' }}/>")

