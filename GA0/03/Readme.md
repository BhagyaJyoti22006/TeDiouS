Complete Python test code:-  
```
from hypothesis import given, strategies as st

class Metric:
    def __init__(self, value, index):
        self.value = value
        self.index = index
    def __lt__(self, other):
        return self.value < other.value
    def __gt__(self, other):
        return self.value > other.value
    def __eq__(self, other):
        return self.value == other.value

@given(st.lists(st.sampled_from([0, 0, 1, 1, 2, 2]), min_size=2, max_size=30))
def test_sort_metrics_is_stable(values):
    items = [Metric(v, i) for i, v in enumerate(values)]
    assert [
        (x.value, x.index) for x in sort_metrics(items)
    ] == [
        (x.value, x.index) for x in sorted(items)
    ]
```

