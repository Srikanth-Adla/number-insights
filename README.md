# Number Insights

## Problem Statement

Given an array of numbers, return an object containing:
- Largest number
- Smallest number
- Sum
- Average
- Even count
- Odd count
- Positive count
- Negative count
- Zero count

## Approach

- Validate the input using an early return (guard clause).
- Initialize all statistics using the first element.
- Traverse the array only once.
- Update all statistics during each iteration.

## Time Complexity

**O(n)**

## Space Complexity

**O(1)**

## Example

Input:

```javascript
[2, 4, 5, 7, 8]
```

Output:

```javascript
{
  largest: 8,
  smallest: 2,
  sum: 26,
  avg: 5.2,
  evenCount: 3,
  oddCount: 2,
  positiveCount: 5,
  negativeCount: 0,
  zeroCount: 0
}
```