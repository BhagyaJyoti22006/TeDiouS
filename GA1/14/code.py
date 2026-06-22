import json

def check_sales():
    try:
        with open("monthly_sales/sales.json", "r") as file:
            data = json.load(file) 
        print(data["total_sales"])
    except Exception:
        pass

if __name__ == "__main__":
    check_sales()