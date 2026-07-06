import os
import json
import subprocess
import sys

def get_video_metadata(url):
    """Fetches video metadata using yt-dlp command line tool."""
    try:
        result = subprocess.run(
            ["yt-dlp", "--dump-json", url],
            capture_output=True, 
            text=True, 
            check=True
        )
        return json.loads(result.stdout)
    except Exception as e:
        # Keep stderr clean but informative if an error occurs
        print(f"Error fetching metadata for {url}: {e}", file=sys.stderr)
        return None

def main():
    try:
        # 1. Load the input parameters
        with open("q-youtube-metadata-filter-server.json", "r") as f:
            params = json.load(f)
    except Exception as e:
        print(f"Error loading input.json: {e}", file=sys.stderr)
        sys.exit(1)

    valid_videos = []
    
    # 2. Iterate and Extract Metadata
    for url in params.get("source_urls", []):
        meta = get_video_metadata(url)
        if not meta:
            continue
            
        duration = meta.get("duration", 0)
        title = (meta.get("title") or "").lower()
        description = (meta.get("description") or "").lower()
        combined_text = title + " " + description
        upload_date = meta.get("upload_date", "00000000")
        video_id = meta.get("id", "")

        # 3. Filter by Duration
        if not (params.get("min_duration_seconds", 0) <= duration <= params.get("max_duration_seconds", float("inf"))):
            continue

        # 4. Filter by Inclusion (required words)
        has_all_required = all(word.lower() in combined_text for word in params.get("required_words", []))
        if not has_all_required:
            continue

        # 5. Filter by Exclusion (forbidden words)
        has_any_forbidden = any(word.lower() in combined_text for word in params.get("forbidden_words", []))
        if has_any_forbidden:
            continue

        valid_videos.append({
            "url": url,
            "upload_date": upload_date,
            "id": video_id
        })

    # 6. Sorting
    valid_videos.sort(key=lambda x: (-int(x["upload_date"] if x["upload_date"].isdigit() else 0), x["id"]))

    # 7. Apply Limit
    limit = params.get("limit", len(valid_videos))
    final_urls = [video["url"] for video in valid_videos[:limit]]

    # 8. Output generation directly to terminal stdout
    output_data = {"urls": final_urls}
    print(json.dumps(output_data, indent=4))

if __name__ == "__main__":
    main()