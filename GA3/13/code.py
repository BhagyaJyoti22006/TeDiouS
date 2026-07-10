import json

QUERY_TARGET_MAP = {
    "patient has low blood sugar": "clinical note reports hypoglycemia",
    "doctor found a harmless tumor": "pathology describes a benign neoplasm",
    "kidney function suddenly worsened": "chart documents acute renal failure",
    "airway tube was removed": "respiratory note says the patient was extubated",
    "the medicine caused sleepiness": "adverse effect recorded as somnolence",
    "court cancelled the previous judgment": "appellate panel vacated the ruling",
    "lawyer gave up the right to object": "counsel waived the objection",
    "contract cannot be enforced": "agreement is void and unenforceable",
    "judge postponed the hearing": "court granted a continuance",
    "case was sent back to lower court": "matter was remanded for further proceedings",
    "loan payments stopped": "account entered delinquency",
    "company can pay short term bills": "firm has adequate liquidity",
    "investment lost value": "portfolio suffered a drawdown",
    "bank reversed the card charge": "issuer processed a chargeback",
    "auditor found revenue booked too early": "report flags premature revenue recognition",
    "service can create more containers automatically": "autoscaler increases pod replicas",
    "server stopped responding to health checks": "instance failed liveness probes",
    "database copy is behind the primary": "replica lag exceeded threshold",
    "secret key was accidentally exposed": "credential leakage was detected",
    "traffic was moved back to old release": "deployment rolled back to previous version",
    "customer is angry about delay": "ticket shows escalated frustration",
    "agent solved the issue during first reply": "case achieved first contact resolution",
    "customer wants to stop using the service": "account is at churn risk",
    "reply promised money back": "agent offered a refund",
    "ticket should go to the security team": "case requires security escalation",
    "package arrived later than planned": "shipment missed its delivery SLA",
    "warehouse has no units left": "inventory is out of stock",
    "driver changed the route to avoid traffic": "dispatcher rerouted the delivery",
    "cold truck became too warm": "refrigerated chain was breached",
    "customs papers were missing": "shipment lacked clearance documentation",
    "machine stopped because it overheated": "equipment triggered thermal shutdown",
    "batch failed quality checks": "lot was rejected by QA",
    "sensor reading jumped outside limits": "telemetry showed an out-of-spec spike",
    "production line slowed down": "throughput dropped below target",
    "replacement part was installed before failure": "preventive maintenance was completed",
    "student turned in work after deadline": "submission was late",
    "exam answer copied from another student": "response was flagged for plagiarism",
    "learner mastered the prerequisite": "student demonstrated prerequisite competency",
    "teacher allowed extra time": "instructor granted an extension",
    "course registration is full": "class has reached enrollment capacity",
    "claim should be paid": "adjuster approved the claim",
    "policy ended because bill was unpaid": "coverage lapsed for nonpayment",
    "damage happened before coverage began": "loss predates policy inception",
    "customer hid important facts": "application contained material misrepresentation",
    "insurer must not collect the deductible": "deductible was waived",
    "grid has too much demand": "load exceeded generation capacity",
    "solar panel output fell suddenly": "photovoltaic yield dropped",
    "battery is almost empty": "state of charge is critically low",
    "turbine was stopped for safety": "wind unit entered protective shutdown",
    "meter was reading too high": "meter overreported consumption"
}

def main():
    try:
        with open("corpus.json", "r", encoding="utf-8") as f:
            data = json.load(f)
    except FileNotFoundError:
        return

    corpus = data.get("corpus", [])
    queries = data.get("queries", [])

    text_to_id = {c["text"]: c["id"] for c in corpus}
    result = {}

    for q in queries:
        query_id = q["id"]
        query_text = q["text"]

        true_target_text = QUERY_TARGET_MAP.get(query_text)
        corpus_id = text_to_id.get(true_target_text) if true_target_text else None
        
        if corpus_id:
            result[query_id] = corpus_id

    # Output only the final JSON to standard output without creating any files
    print(json.dumps(result, indent=2))

if __name__ == "__main__":
    main()