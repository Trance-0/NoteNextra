import pyperclip

def clean_clipboard_content():
    # Get the current content of the clipboard
    clipboard_content = pyperclip.paste()
    
    # Remove line breaks and extra spaces
    cleaned_content = ' '.join(clipboard_content.split())
    
    # Convert to UTF-8
    utf8_content = cleaned_content.encode('utf-8').decode('utf-8')
    
    # Replace the clipboard content with the cleaned and formatted text
    pyperclip.copy(utf8_content)
import time

previous_content = ""

while True:
    current_content = pyperclip.paste()
    if current_content != previous_content:
        clean_clipboard_content()
        previous_content = current_content
    time.sleep(0.1)  # Check for new content every second
