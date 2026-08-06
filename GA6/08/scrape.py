from playwright.sync_api import sync_playwright

def main():
    seeds = range(<I>, <J>)
    total_sum = 0
    base_url = "https://sanand0.github.io/tdsdata/js_table/?seed="

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        for seed in seeds:
            url = f"{base_url}{seed}"
            
            # Wait until all background network requests are finished
            page.goto(url, wait_until="networkidle")
            
            # Wait exactly 1 second to guarantee the JavaScript has drawn the table on screen
            page.wait_for_timeout(1000)
            
            # Grab all table cells and sum them up
            page_sum = page.evaluate("""() => {
                let sum = 0;
                document.querySelectorAll("td").forEach(td => {
                    let val = parseFloat(td.innerText);
                    if (!isNaN(val)) sum += val;
                });
                return sum;
            }""")
            
            total_sum += page_sum
            
        print(total_sum)
        browser.close()

if __name__ == "__main__":
    main()