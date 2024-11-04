The `DSA-Runtime-Trainer` is an app meant for educational use, that helps developers learn and understand `Big O runtime complexities` of various algorithms and pieces of code.

## Questions

There are three tiers of difficulty for questions:

- Easy
- Medium
- Hard

### Easy

The easy difficulty is meant for beginners, or those just starting to learn about Big O notation and runtime complexity, the code is meant to be straightforward, easy to understand and analyze, i.e.:

```javascript
// Analyze this function
function isNumberThere(arr, number) {
  const size = arr.length;
  for (let i = 0; i < size; ++i) {
    if (arr[i] === number) {
      return true;
    }
  }
  return false;
}
```

### Medium

The medium difficulty is supposed to offer some challenge, and mainly provide realistic real world code examples aimed to solve a certain problem, these questions may also involve data structures, and/or wrapper functions with more complex logic than easy questions, i.e.:

```python
# Analyze this function
def countTriplets(n):
  count = 0
   for i in range(n):
     for j in range(i, n):
       for k in range(j, n):
         if (i + j + k) % 2 == 0:
           count += 1
   return count
```

### Hard

The hard difficulty is supposed to use advanced concepts, heavy use of data structures, and maybe dynamic programming, such as memoization and tabulation. The solution might be more towards understanding how the code changes its behavior when introducing new things, such as memoization, rather than simply analyzing every line of code, i.e.:

```cpp
int fib_helper(int n, std::unordered_map<int, int>& memo)
{
  if (n <= 1)
  {
    return n;
  }
  if (memo.find(n) != memo.end())
  {
    return memo[n];
  }
  memo[n] = fib_helper(n - 1, memo) + fib_helper(n - 2, memo);
  return memo[n];
}

// Analyze this function
int fib(int n)
{
  std::unordered_map<int, int> memo;
  return fib_helper(n, memo);
}
```
