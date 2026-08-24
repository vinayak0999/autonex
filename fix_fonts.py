import os
import re
import glob

components_dir = "/Users/chirkut/Documents/Autonex Website Revamp/client/src/components"
tsx_files = glob.glob(os.path.join(components_dir, "**/*.tsx"), recursive=True)

for file in tsx_files:
    with open(file, "r") as f:
        content = f.read()

    # Replace inline font weights
    new_content = re.sub(r'fontWeight:\s*900', 'fontWeight: 500', content)
    new_content = re.sub(r'fontWeight:\s*800', 'fontWeight: 500', new_content)
    
    # Remove explicit font-family Inter
    new_content = re.sub(r'fontFamily:\s*["\']\'Inter\', system-ui, -apple-system, sans-serif["\'],?', '', new_content)

    if content != new_content:
        with open(file, "w") as f:
            f.write(new_content)
        print(f"Updated {file}")
