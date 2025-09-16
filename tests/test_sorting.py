import json
import sys
from pathlib import Path

sys.path.append(str(Path(__file__).resolve().parent.parent))

from sorting_script import sort_drinks

def test_sort_drinks_sorts_alphabetically(tmp_path):
    input_data = {
        "drinks": [
            {"name": "Water"},
            {"name": "Cola"},
            {"name": "Beer"}
        ]
    }

    input_file = tmp_path / "unsorted.json"
    output_file = tmp_path / "sorted.json"

    with input_file.open('w') as f:
        json.dump(input_data, f)

    sort_drinks(str(input_file), str(output_file))

    with output_file.open() as f:
        sorted_data = json.load(f)

    sorted_names = [item["name"] for item in sorted_data["drinks"]]
    assert sorted_names == sorted(sorted_names)