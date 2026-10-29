const DsaQuestions = [
  // =====================================================
  // ARRAYS
  // =====================================================

  {
    id: "two-sum",
    title: "Two Sum",
    topic: "arrays",
    difficulty: "Easy",

    source: "interview-os",

    leetcode: {
      available: true,
      url: "https://leetcode.com/problems/two-sum/",
    },

    patterns: ["Hashing", "Two Pointers"],

    tags: ["Array", "Hash Table"],

    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",

    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] = 2 + 7 = 9.",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
        explanation: "Because nums[1] + nums[2] = 2 + 4 = 6.",
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] = 3 + 3 = 6.",
      },
    ],

    constraints: [
      "2 <= nums.length <= 10^4",
      "-10^9 <= nums[i] <= 10^9",
      "-10^9 <= target <= 10^9",
      "Only one valid answer exists.",
    ],

    starterCode: {
      cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {

    }
};`,
    },

    testCases: [
      {
        input: `[2,7,11,15]
9`,
        expectedOutput: "[0,1]",
      },
      {
        input: `[3,2,4]
6`,
        expectedOutput: "[1,2]",
      },
      {
        input: `[3,3]
6`,
        expectedOutput: "[0,1]",
      },
    ],
  },

  {
    id: "best-time-to-buy-and-sell-stock",
    title: "Best Time to Buy and Sell Stock",
    topic: "arrays",
    difficulty: "Easy",

    source: "interview-os",

    leetcode: {
      available: true,
      url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
    },

    patterns: ["Greedy", "Sliding Window"],

    tags: ["Array", "Greedy"],

    description:
      "You are given an array prices where prices[i] is the price of a given stock on the ith day. Find the maximum profit you can achieve by choosing a single day to buy and a different day in the future to sell.",

    examples: [
      {
        input: "prices = [7,1,5,3,6,4]",
        output: "5",
        explanation: "Buy at 1 and sell at 6 to make a profit of 5.",
      },
      {
        input: "prices = [7,6,4,3,1]",
        output: "0",
        explanation: "No profitable transaction is possible.",
      },
    ],

    constraints: [
      "1 <= prices.length <= 10^5",
      "0 <= prices[i] <= 10^4",
    ],

    starterCode: {
      cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    int maxProfit(vector<int>& prices) {

    }
};`,
    },

    testCases: [
      {
        input: "[7,1,5,3,6,4]",
        expectedOutput: "5",
      },
      {
        input: "[7,6,4,3,1]",
        expectedOutput: "0",
      },
    ],
  },

  {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    topic: "arrays",
    difficulty: "Medium",

    source: "interview-os",

    leetcode: {
      available: true,
      url: "https://leetcode.com/problems/maximum-subarray/",
    },

    patterns: ["Dynamic Programming", "Greedy"],

    tags: ["Array", "Dynamic Programming", "Kadane's Algorithm"],

    description:
      "Given an integer array nums, find the subarray with the largest sum and return its sum.",

    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "The subarray [4,-1,2,1] has the largest sum of 6.",
      },
      {
        input: "nums = [1]",
        output: "1",
        explanation: "The only subarray is [1].",
      },
      {
        input: "nums = [5,4,-1,7,8]",
        output: "23",
        explanation: "The entire array has the largest sum.",
      },
    ],

    constraints: [
      "1 <= nums.length <= 10^5",
      "-10^4 <= nums[i] <= 10^4",
    ],

    starterCode: {
      cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    int maxSubArray(vector<int>& nums) {

    }
};`,
    },

    testCases: [
      {
        input: "[-2,1,-3,4,-1,2,1,-5,4]",
        expectedOutput: "6",
      },
      {
        input: "[1]",
        expectedOutput: "1",
      },
      {
        input: "[5,4,-1,7,8]",
        expectedOutput: "23",
      },
    ],
  },

  {
    id: "3sum",
    title: "3Sum",
    topic: "arrays",
    difficulty: "Medium",

    source: "interview-os",

    leetcode: {
      available: true,
      url: "https://leetcode.com/problems/3sum/",
    },

    patterns: ["Sorting", "Two Pointers"],

    tags: ["Array", "Two Pointers", "Sorting"],

    description:
      "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i, j, and k are distinct and nums[i] + nums[j] + nums[k] == 0.",

    examples: [
      {
        input: "nums = [-1,0,1,2,-1,-4]",
        output: "[[-1,-1,2],[-1,0,1]]",
        explanation: "These are the unique triplets that sum to zero.",
      },
      {
        input: "nums = [0,1,1]",
        output: "[]",
        explanation: "No three numbers sum to zero.",
      },
      {
        input: "nums = [0,0,0]",
        output: "[[0,0,0]]",
        explanation: "The only valid triplet is [0,0,0].",
      },
    ],

    constraints: [
      "3 <= nums.length <= 3000",
      "-10^5 <= nums[i] <= 10^5",
    ],

    starterCode: {
      cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {

    }
};`,
    },

    testCases: [
      {
        input: "[-1,0,1,2,-1,-4]",
        expectedOutput: "[[-1,-1,2],[-1,0,1]]",
      },
      {
        input: "[0,1,1]",
        expectedOutput: "[]",
      },
      {
        input: "[0,0,0]",
        expectedOutput: "[[0,0,0]]",
      },
    ],
  },

  {
    id: "container-with-most-water",
    title: "Container With Most Water",
    topic: "arrays",
    difficulty: "Medium",

    source: "interview-os",

    leetcode: {
      available: true,
      url: "https://leetcode.com/problems/container-with-most-water/",
    },

    patterns: ["Two Pointers", "Greedy"],

    tags: ["Array", "Two Pointers", "Greedy"],

    description:
      "Given an integer array height where height[i] represents the height of a vertical line, find two lines that together with the x-axis form a container that holds the most water.",

    examples: [
      {
        input: "height = [1,8,6,2,5,4,8,3,7]",
        output: "49",
        explanation:
          "The maximum area is obtained using the lines with heights 8 and 7.",
      },
      {
        input: "height = [1,1]",
        output: "1",
        explanation: "The only possible container has area 1.",
      },
    ],

    constraints: [
      "2 <= height.length <= 10^5",
      "0 <= height[i] <= 10^4",
    ],

    starterCode: {
      cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    int maxArea(vector<int>& height) {

    }
};`,
    },

    testCases: [
      {
        input: "[1,8,6,2,5,4,8,3,7]",
        expectedOutput: "49",
      },
      {
        input: "[1,1]",
        expectedOutput: "1",
      },
    ],
  },

  {
    id: "sort-colors",
    title: "Sort Colors",
    topic: "arrays",
    difficulty: "Medium",

    source: "interview-os",

    leetcode: {
      available: true,
      url: "https://leetcode.com/problems/sort-colors/",
    },

    patterns: ["Sorting", "Two Pointers"],

    tags: ["Array", "Two Pointers", "Sorting"],

    description:
      "Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent.",

    examples: [
      {
        input: "nums = [2,0,2,1,1,0]",
        output: "[0,0,1,1,2,2]",
        explanation: "The colors are sorted in-place.",
      },
      {
        input: "nums = [2,0,1]",
        output: "[0,1,2]",
        explanation: "The array is sorted into color order.",
      },
    ],

    constraints: [
      "n == nums.length",
      "1 <= n <= 300",
      "nums[i] is either 0, 1, or 2.",
    ],

    starterCode: {
      cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    void sortColors(vector<int>& nums) {

    }
};`,
    },

    testCases: [
      {
        input: "[2,0,2,1,1,0]",
        expectedOutput: "[0,0,1,1,2,2]",
      },
      {
        input: "[2,0,1]",
        expectedOutput: "[0,1,2]",
      },
    ],
  },

  {
    id: "subarray-sum-equals-k",
    title: "Subarray Sum Equals K",
    topic: "arrays",
    difficulty: "Medium",

    source: "interview-os",

    leetcode: {
      available: true,
      url: "https://leetcode.com/problems/subarray-sum-equals-k/",
    },

    patterns: ["Prefix Sum", "Hashing"],

    tags: ["Array", "Hash Table", "Prefix Sum"],

    description:
      "Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals k.",

    examples: [
      {
        input: "nums = [1,1,1], k = 2",
        output: "2",
        explanation: "There are two subarrays whose sum is 2.",
      },
      {
        input: "nums = [1,2,3], k = 3",
        output: "2",
        explanation: "The subarrays [1,2] and [3] have sum 3.",
      },
    ],

    constraints: [
      "1 <= nums.length <= 2 * 10^4",
      "-1000 <= nums[i] <= 1000",
      "-10^7 <= k <= 10^7",
    ],

    starterCode: {
      cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    int subarraySum(vector<int>& nums, int k) {

    }
};`,
    },

    testCases: [
      {
        input: "[1,1,1]\n2",
        expectedOutput: "2",
      },
      {
        input: "[1,2,3]\n3",
        expectedOutput: "2",
      },
    ],
  },

  {
    id: "maximum-product-subarray",
    title: "Maximum Product Subarray",
    topic: "arrays",
    difficulty: "Medium",

    source: "interview-os",

    leetcode: {
      available: true,
      url: "https://leetcode.com/problems/maximum-product-subarray/",
    },

    patterns: ["Dynamic Programming", "Kadane's Algorithm"],

    tags: ["Array", "Dynamic Programming"],

    description:
      "Given an integer array nums, find a contiguous non-empty subarray that has the largest product, and return the product.",

    examples: [
      {
        input: "nums = [2,3,-2,4]",
        output: "6",
        explanation: "The subarray [2,3] has the largest product.",
      },
      {
        input: "nums = [-2,0,-1]",
        output: "0",
        explanation: "The maximum product is 0.",
      },
    ],

    constraints: [
      "1 <= nums.length <= 2 * 10^4",
      "-10 <= nums[i] <= 10",
    ],

    starterCode: {
      cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    int maxProduct(vector<int>& nums) {

    }
};`,
    },

    testCases: [
      {
        input: "[2,3,-2,4]",
        expectedOutput: "6",
      },
      {
        input: "[-2,0,-1]",
        expectedOutput: "0",
      },
    ],
  },

  {
    id: "merge-sorted-array",
    title: "Merge Sorted Array",
    topic: "arrays",
    difficulty: "Easy",

    source: "interview-os",

    leetcode: {
      available: true,
      url: "https://leetcode.com/problems/merge-sorted-array/",
    },

    patterns: ["Two Pointers", "Sorting"],

    tags: ["Array", "Two Pointers", "Sorting"],

    description:
      "You are given two integer arrays nums1 and nums2, sorted in non-decreasing order. Merge nums2 into nums1 as one sorted array.",

    examples: [
      {
        input: "nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3",
        output: "[1,2,2,3,5,6]",
        explanation: "The two sorted arrays are merged in-place.",
      },
      {
        input: "nums1 = [1], m = 1, nums2 = [], n = 0",
        output: "[1]",
        explanation: "There are no elements to merge.",
      },
    ],

    constraints: [
      "nums1.length == m + n",
      "nums2.length == n",
      "0 <= m,n <= 200",
      "1 <= m + n <= 200",
    ],

    starterCode: {
      cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {

    }
};`,
    },

    testCases: [
      {
        input: "[1,2,3,0,0,0]\n3\n[2,5,6]\n3",
        expectedOutput: "[1,2,2,3,5,6]",
      },
    ],
  },

  {
    id: "custom-array-problem",
    title: "Custom Array Problem",
    topic: "arrays",
    difficulty: "Easy",

    source: "interview-os",

    leetcode: {
      available: false,
    },

    patterns: ["Sorting"],

    tags: ["Array", "Sorting"],

    description:
      "Given an array of integers, arrange the elements according to the required ordering using an efficient sorting-based approach.",

    examples: [
      {
        input: "nums = [5,2,8,1]",
        output: "[1,2,5,8]",
        explanation: "The elements are arranged in ascending order.",
      },
    ],

    constraints: [
      "1 <= nums.length <= 10^5",
      "-10^9 <= nums[i] <= 10^9",
    ],

    starterCode: {
      cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    vector<int> solve(vector<int>& nums) {

    }
};`,
    },

    testCases: [
      {
        input: "[5,2,8,1]",
        expectedOutput: "[1,2,5,8]",
      },
    ],
  },

  // =====================================================
  // STRINGS
  // =====================================================

  {
    id: "valid-anagram",
    title: "Valid Anagram",
    topic: "strings",
    difficulty: "Easy",

    source: "interview-os",

    leetcode: {
      available: true,
      url: "https://leetcode.com/problems/valid-anagram/",
    },

    patterns: ["Hashing", "Sorting"],

    tags: ["String", "Hash Table", "Sorting"],

    description:
      "Given two strings s and t, return true if t is an anagram of s, and false otherwise.",

    examples: [
      {
        input: 's = "anagram", t = "nagaram"',
        output: "true",
        explanation: "Both strings contain the same characters.",
      },
      {
        input: 's = "rat", t = "car"',
        output: "false",
        explanation: "The characters are different.",
      },
    ],

    constraints: [
      "1 <= s.length, t.length <= 5 * 10^4",
      "s and t consist of lowercase English letters.",
    ],

    starterCode: {
      cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    bool isAnagram(string s, string t) {

    }
};`,
    },

    testCases: [
      {
        input: 'anagram\nnagaram',
        expectedOutput: "true",
      },
      {
        input: 'rat\ncar',
        expectedOutput: "false",
      },
    ],
  },

  {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    topic: "strings",
    difficulty: "Easy",

    source: "interview-os",

    leetcode: {
      available: true,
      url: "https://leetcode.com/problems/valid-palindrome/",
    },

    patterns: ["Two Pointers"],

    tags: ["String", "Two Pointers"],

    description:
      "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.",

    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation: "After cleaning the string, it reads the same backward.",
      },
      {
        input: 's = "race a car"',
        output: "false",
        explanation: "The cleaned string is not a palindrome.",
      },
    ],

    constraints: [
      "1 <= s.length <= 2 * 10^5",
      "s consists only of printable ASCII characters.",
    ],

    starterCode: {
      cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    bool isPalindrome(string s) {

    }
};`,
    },

    testCases: [
      {
        input: "A man, a plan, a canal: Panama",
        expectedOutput: "true",
      },
      {
        input: "race a car",
        expectedOutput: "false",
      },
    ],
  },

  {
    id: "longest-substring-without-repeating-characters",
    title: "Longest Substring Without Repeating Characters",
    topic: "strings",
    difficulty: "Medium",

    source: "interview-os",

    leetcode: {
      available: true,
      url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    },

    patterns: ["Sliding Window", "Hashing"],

    tags: ["String", "Hash Table", "Sliding Window"],

    description:
      "Given a string s, find the length of the longest substring without repeating characters.",

    examples: [
      {
        input: 's = "abcabcbb"',
        output: "3",
        explanation: 'The answer is "abc".',
      },
      {
        input: 's = "bbbbb"',
        output: "1",
        explanation: 'The answer is "b".',
      },
      {
        input: 's = "pwwkew"',
        output: "3",
        explanation: 'The answer is "wke".',
      },
    ],

    constraints: [
      "0 <= s.length <= 5 * 10^4",
      "s consists of English letters, digits, symbols and spaces.",
    ],

    starterCode: {
      cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    int lengthOfLongestSubstring(string s) {

    }
};`,
    },

    testCases: [
      {
        input: "abcabcbb",
        expectedOutput: "3",
      },
      {
        input: "bbbbb",
        expectedOutput: "1",
      },
      {
        input: "pwwkew",
        expectedOutput: "3",
      },
    ],
  },

  {
    id: "longest-repeating-character-replacement",
    title: "Longest Repeating Character Replacement",
    topic: "strings",
    difficulty: "Medium",

    source: "interview-os",

    leetcode: {
      available: true,
      url: "https://leetcode.com/problems/longest-repeating-character-replacement/",
    },

    patterns: ["Sliding Window", "Hashing"],

    tags: ["String", "Hash Table", "Sliding Window"],

    description:
      "You are given a string s and an integer k. You can choose any character and change it to any other uppercase English character at most k times. Return the length of the longest substring containing the same letter after performing the operations.",

    examples: [
      {
        input: 's = "ABAB", k = 2',
        output: "4",
        explanation: "Replace the two Bs with As.",
      },
      {
        input: 's = "AABABBA", k = 1',
        output: "4",
        explanation: "Changing one B to A gives the longest valid substring.",
      },
    ],

    constraints: [
      "1 <= s.length <= 10^5",
      "s consists of only uppercase English letters.",
      "0 <= k <= s.length",
    ],

    starterCode: {
      cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    int characterReplacement(string s, int k) {

    }
};`,
    },

    testCases: [
      {
        input: "ABAB\n2",
        expectedOutput: "4",
      },
      {
        input: "AABABBA\n1",
        expectedOutput: "4",
      },
    ],
  },

  {
    id: "minimum-window-substring",
    title: "Minimum Window Substring",
    topic: "strings",
    difficulty: "Hard",

    source: "interview-os",

    leetcode: {
      available: true,
      url: "https://leetcode.com/problems/minimum-window-substring/",
    },

    patterns: ["Sliding Window", "Hashing"],

    tags: ["String", "Hash Table", "Sliding Window"],

    description:
      "Given two strings s and t, return the minimum window substring of s such that every character in t, including duplicates, is included in the window.",

    examples: [
      {
        input: 's = "ADOBECODEBANC", t = "ABC"',
        output: '"BANC"',
        explanation: '"BANC" is the smallest substring containing A, B and C.',
      },
      {
        input: 's = "a", t = "a"',
        output: '"a"',
        explanation: "The entire string is the required window.",
      },
    ],

    constraints: [
      "m == s.length",
      "n == t.length",
      "1 <= m,n <= 10^5",
      "s and t consist of English letters.",
    ],

    starterCode: {
      cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    string minWindow(string s, string t) {

    }
};`,
    },

    testCases: [
      {
        input: "ADOBECODEBANC\nABC",
        expectedOutput: "BANC",
      },
      {
        input: "a\na",
        expectedOutput: "a",
      },
    ],
  },

  // =====================================================
  // LINKED LIST
  // =====================================================

  {
    id: "reverse-linked-list",
    title: "Reverse Linked List",
    topic: "linked-list",
    difficulty: "Easy",

    source: "interview-os",

    leetcode: {
      available: true,
      url: "https://leetcode.com/problems/reverse-linked-list/",
    },

    patterns: ["Two Pointers"],

    tags: ["Linked List", "Recursion"],

    description:
      "Given the head of a singly linked list, reverse the list and return the reversed list.",

    examples: [
      {
        input: "head = [1,2,3,4,5]",
        output: "[5,4,3,2,1]",
        explanation: "The linked list is reversed.",
      },
      {
        input: "head = [1,2]",
        output: "[2,1]",
        explanation: "The two nodes are reversed.",
      },
    ],

    constraints: [
      "The number of nodes is in the range [0, 5000].",
      "-5000 <= Node.val <= 5000",
    ],

    starterCode: {
      cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    ListNode* reverseList(ListNode* head) {

    }
};`,
    },

    testCases: [
      {
        input: "[1,2,3,4,5]",
        expectedOutput: "[5,4,3,2,1]",
      },
      {
        input: "[1,2]",
        expectedOutput: "[2,1]",
      },
    ],
  },

  {
    id: "middle-of-the-linked-list",
    title: "Middle of the Linked List",
    topic: "linked-list",
    difficulty: "Easy",

    source: "interview-os",

    leetcode: {
      available: true,
      url: "https://leetcode.com/problems/middle-of-the-linked-list/",
    },

    patterns: ["Two Pointers", "Fast and Slow Pointers"],

    tags: ["Linked List", "Two Pointers"],

    description:
      "Given the head of a singly linked list, return the middle node of the linked list.",

    examples: [
      {
        input: "head = [1,2,3,4,5]",
        output: "[3,4,5]",
        explanation: "Node 3 is the middle node.",
      },
      {
        input: "head = [1,2,3,4,5,6]",
        output: "[4,5,6]",
        explanation: "Node 4 is the second middle node.",
      },
    ],

    constraints: [
      "The number of nodes is in the range [1, 100].",
      "1 <= Node.val <= 100",
    ],

    starterCode: {
      cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    ListNode* middleNode(ListNode* head) {

    }
};`,
    },

    testCases: [
      {
        input: "[1,2,3,4,5]",
        expectedOutput: "[3,4,5]",
      },
      {
        input: "[1,2,3,4,5,6]",
        expectedOutput: "[4,5,6]",
      },
    ],
  },

  {
    id: "linked-list-cycle",
    title: "Linked List Cycle",
    topic: "linked-list",
    difficulty: "Easy",

    source: "interview-os",

    leetcode: {
      available: true,
      url: "https://leetcode.com/problems/linked-list-cycle/",
    },

    patterns: ["Two Pointers", "Fast and Slow Pointers"],

    tags: ["Linked List", "Two Pointers"],

    description:
      "Given the head of a linked list, determine if the linked list has a cycle in it.",

    examples: [
      {
        input: "head = [3,2,0,-4], pos = 1",
        output: "true",
        explanation: "The tail connects to the second node.",
      },
      {
        input: "head = [1,2], pos = 0",
        output: "true",
        explanation: "The tail connects back to the first node.",
      },
      {
        input: "head = [1], pos = -1",
        output: "false",
        explanation: "There is no cycle.",
      },
    ],

    constraints: [
      "The number of nodes is in the range [0, 10^4].",
      "-10^5 <= Node.val <= 10^5",
      "pos is -1 or a valid index in the linked list.",
    ],

    starterCode: {
      cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    bool hasCycle(ListNode *head) {

    }
};`,
    },

    testCases: [
      {
        input: "[3,2,0,-4]\npos = 1",
        expectedOutput: "true",
      },
      {
        input: "[1,2]\npos = 0",
        expectedOutput: "true",
      },
      {
        input: "[1]\npos = -1",
        expectedOutput: "false",
      },
    ],
  },

  {
    id: "merge-two-sorted-lists",
    title: "Merge Two Sorted Lists",
    topic: "linked-list",
    difficulty: "Easy",

    source: "interview-os",

    leetcode: {
      available: true,
      url: "https://leetcode.com/problems/merge-two-sorted-lists/",
    },

    patterns: ["Two Pointers", "Sorting"],

    tags: ["Linked List", "Recursion"],

    description:
      "You are given the heads of two sorted linked lists. Merge the two lists into one sorted list and return its head.",

    examples: [
      {
        input: "list1 = [1,2,4], list2 = [1,3,4]",
        output: "[1,1,2,3,4,4]",
        explanation: "The two sorted lists are merged.",
      },
      {
        input: "list1 = [], list2 = []",
        output: "[]",
        explanation: "Both lists are empty.",
      },
    ],

    constraints: [
      "The number of nodes in both lists is in the range [0, 50].",
      "-100 <= Node.val <= 100",
      "Both lists are sorted in non-decreasing order.",
    ],

    starterCode: {
      cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {

    }
};`,
    },

    testCases: [
      {
        input: "[1,2,4]\n[1,3,4]",
        expectedOutput: "[1,1,2,3,4,4]",
      },
      {
        input: "[]\n[]",
        expectedOutput: "[]",
      },
    ],
  },

  // =====================================================
  // STACK
  // =====================================================

  {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    topic: "stack",
    difficulty: "Easy",

    source: "interview-os",

    leetcode: {
      available: true,
      url: "https://leetcode.com/problems/valid-parentheses/",
    },

    patterns: ["Stack"],

    tags: ["String", "Stack"],

    description:
      "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",

    examples: [
      {
        input: 's = "()"',
        output: "true",
        explanation: "The parentheses are correctly matched.",
      },
      {
        input: 's = "()[]{}"',
        output: "true",
        explanation: "All brackets are correctly matched.",
      },
      {
        input: 's = "(]"',
        output: "false",
        explanation: "The brackets do not match.",
      },
    ],

    constraints: [
      "1 <= s.length <= 10^4",
      "s consists of parentheses only.",
    ],

    starterCode: {
      cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    bool isValid(string s) {

    }
};`,
    },

    testCases: [
      {
        input: "()",
        expectedOutput: "true",
      },
      {
        input: "()[]{}",
        expectedOutput: "true",
      },
      {
        input: "(]",
        expectedOutput: "false",
      },
    ],
  },

  {
    id: "daily-temperatures",
    title: "Daily Temperatures",
    topic: "stack",
    difficulty: "Medium",

    source: "interview-os",

    leetcode: {
      available: true,
      url: "https://leetcode.com/problems/daily-temperatures/",
    },

    patterns: ["Stack", "Monotonic Stack"],

    tags: ["Array", "Stack", "Monotonic Stack"],

    description:
      "Given an array of integers temperatures represents the daily temperatures, return an array where answer[i] tells you how many days you have to wait after the ith day to get a warmer temperature.",

    examples: [
      {
        input: "temperatures = [73,74,75,71,69,72,76,73]",
        output: "[1,1,4,2,1,1,0,0]",
        explanation: "Each value represents the number of days until a warmer temperature.",
      },
      {
        input: "temperatures = [30,40,50,60]",
        output: "[1,1,1,0]",
        explanation: "Every day except the last has a warmer following day.",
      },
    ],

    constraints: [
      "1 <= temperatures.length <= 10^5",
      "30 <= temperatures[i] <= 100",
    ],

    starterCode: {
      cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    vector<int> dailyTemperatures(vector<int>& temperatures) {

    }
};`,
    },

    testCases: [
      {
        input: "[73,74,75,71,69,72,76,73]",
        expectedOutput: "[1,1,4,2,1,1,0,0]",
      },
      {
        input: "[30,40,50,60]",
        expectedOutput: "[1,1,1,0]",
      },
    ],
  },

  {
    id: "largest-rectangle-in-histogram",
    title: "Largest Rectangle in Histogram",
    topic: "stack",
    difficulty: "Hard",

    source: "interview-os",

    leetcode: {
      available: true,
      url: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
    },

    patterns: ["Stack", "Monotonic Stack"],

    tags: ["Array", "Stack", "Monotonic Stack"],

    description:
      "Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.",

    examples: [
      {
        input: "heights = [2,1,5,6,2,3]",
        output: "10",
        explanation: "The largest rectangle has area 10.",
      },
      {
        input: "heights = [2,4]",
        output: "4",
        explanation: "The largest rectangle has area 4.",
      },
    ],

    constraints: [
      "1 <= heights.length <= 10^5",
      "0 <= heights[i] <= 10^4",
    ],

    starterCode: {
      cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    int largestRectangleArea(vector<int>& heights) {

    }
};`,
    },

    testCases: [
      {
        input: "[2,1,5,6,2,3]",
        expectedOutput: "10",
      },
      {
        input: "[2,4]",
        expectedOutput: "4",
      },
    ],
  },

  // =====================================================
  // QUEUE
  // =====================================================

  {
    id: "sliding-window-maximum",
    title: "Sliding Window Maximum",
    topic: "queue",
    difficulty: "Hard",

    source: "interview-os",

    leetcode: {
      available: true,
      url: "https://leetcode.com/problems/sliding-window-maximum/",
    },

    patterns: ["Sliding Window", "Monotonic Queue"],

    tags: ["Array", "Queue", "Sliding Window"],

    description:
      "Given an array nums and a sliding window of size k moving from left to right, return the maximum value in each window.",

    examples: [
      {
        input: "nums = [1,3,-1,-3,5,3,6,7], k = 3",
        output: "[3,3,5,5,6,7]",
        explanation: "The maximum value of each window is returned.",
      },
      {
        input: "nums = [1], k = 1",
        output: "[1]",
        explanation: "The only window contains one element.",
      },
    ],

    constraints: [
      "1 <= nums.length <= 10^5",
      "-10^4 <= nums[i] <= 10^4",
      "1 <= k <= nums.length",
    ],

    starterCode: {
      cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    vector<int> maxSlidingWindow(vector<int>& nums, int k) {

    }
};`,
    },

    testCases: [
      {
        input: "[1,3,-1,-3,5,3,6,7]\n3",
        expectedOutput: "[3,3,5,5,6,7]",
      },
      {
        input: "[1]\n1",
        expectedOutput: "[1]",
      },
    ],
  },

  // =====================================================
  // BINARY TREE
  // =====================================================

  {
    id: "binary-tree-inorder-traversal",
    title: "Binary Tree Inorder Traversal",
    topic: "binary-tree",
    difficulty: "Easy",

    source: "interview-os",

    leetcode: {
      available: true,
      url: "https://leetcode.com/problems/binary-tree-inorder-traversal/",
    },

    patterns: ["DFS", "Recursion"],

    tags: ["Tree", "Depth-First Search", "Recursion"],

    description:
      "Given the root of a binary tree, return the inorder traversal of its nodes' values.",

    examples: [
      {
        input: "root = [1,null,2,3]",
        output: "[1,3,2]",
        explanation: "Inorder traversal visits left, root, right.",
      },
      {
        input: "root = []",
        output: "[]",
        explanation: "The tree is empty.",
      },
    ],

    constraints: [
      "The number of nodes is in the range [0, 100].",
      "-100 <= Node.val <= 100",
    ],

    starterCode: {
      cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    vector<int> inorderTraversal(TreeNode* root) {

    }
};`,
    },

    testCases: [
      {
        input: "[1,null,2,3]",
        expectedOutput: "[1,3,2]",
      },
      {
        input: "[]",
        expectedOutput: "[]",
      },
    ],
  },

  {
    id: "maximum-depth-of-binary-tree",
    title: "Maximum Depth of Binary Tree",
    topic: "binary-tree",
    difficulty: "Easy",

    source: "interview-os",

    leetcode: {
      available: true,
      url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
    },

    patterns: ["DFS", "BFS", "Recursion"],

    tags: ["Tree", "DFS", "BFS", "Recursion"],

    description:
      "Given the root of a binary tree, return its maximum depth.",

    examples: [
      {
        input: "root = [3,9,20,null,null,15,7]",
        output: "3",
        explanation: "The longest root-to-leaf path contains 3 nodes.",
      },
      {
        input: "root = [1,null,2]",
        output: "2",
        explanation: "The tree has depth 2.",
      },
    ],

    constraints: [
      "The number of nodes is in the range [0, 10^4].",
      "-100 <= Node.val <= 100",
    ],

    starterCode: {
      cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    int maxDepth(TreeNode* root) {

    }
};`,
    },

    testCases: [
      {
        input: "[3,9,20,null,null,15,7]",
        expectedOutput: "3",
      },
      {
        input: "[1,null,2]",
        expectedOutput: "2",
      },
    ],
  },

  {
    id: "binary-tree-level-order-traversal",
    title: "Binary Tree Level Order Traversal",
    topic: "binary-tree",
    difficulty: "Medium",

    source: "interview-os",

    leetcode: {
      available: true,
      url: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
    },

    patterns: ["BFS", "Queue"],

    tags: ["Tree", "BFS", "Queue"],

    description:
      "Given the root of a binary tree, return the level order traversal of its nodes' values.",

    examples: [
      {
        input: "root = [3,9,20,null,null,15,7]",
        output: "[[3],[9,20],[15,7]]",
        explanation: "Nodes are returned level by level.",
      },
      {
        input: "root = [1]",
        output: "[[1]]",
        explanation: "The tree has one level.",
      },
    ],

    constraints: [
      "The number of nodes is in the range [0, 2000].",
      "-1000 <= Node.val <= 1000",
    ],

    starterCode: {
      cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    vector<vector<int>> levelOrder(TreeNode* root) {

    }
};`,
    },

    testCases: [
      {
        input: "[3,9,20,null,null,15,7]",
        expectedOutput: "[[3],[9,20],[15,7]]",
      },
      {
        input: "[1]",
        expectedOutput: "[[1]]",
      },
    ],
  },

  // =====================================================
  // BINARY SEARCH TREE
  // =====================================================

  {
    id: "search-in-a-binary-search-tree",
    title: "Search in a Binary Search Tree",
    topic: "binary-search-tree",
    difficulty: "Easy",

    source: "interview-os",

    leetcode: {
      available: true,
      url: "https://leetcode.com/problems/search-in-a-binary-search-tree/",
    },

    patterns: ["Binary Search", "Recursion"],

    tags: ["Tree", "Binary Search Tree", "Recursion"],

    description:
      "You are given the root of a binary search tree and a value val. Find the node in the BST whose value equals val and return the subtree rooted with that node.",

    examples: [
      {
        input: "root = [4,2,7,1,3], val = 2",
        output: "[2,1,3]",
        explanation: "The subtree rooted at 2 is returned.",
      },
      {
        input: "root = [4,2,7,1,3], val = 5",
        output: "[]",
        explanation: "The value 5 does not exist in the tree.",
      },
    ],

    constraints: [
      "The number of nodes is in the range [1, 5000].",
      "1 <= Node.val <= 10^7",
      "1 <= val <= 10^7",
    ],

    starterCode: {
      cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    TreeNode* searchBST(TreeNode* root, int val) {

    }
};`,
    },

    testCases: [
      {
        input: "[4,2,7,1,3]\n2",
        expectedOutput: "[2,1,3]",
      },
      {
        input: "[4,2,7,1,3]\n5",
        expectedOutput: "[]",
      },
    ],
  },

  // =====================================================
  // HEAP
  // =====================================================

  {
    id: "kth-largest-element-in-an-array",
    title: "Kth Largest Element in an Array",
    topic: "heap",
    difficulty: "Medium",

    source: "interview-os",

    leetcode: {
      available: true,
      url: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
    },

    patterns: ["Heap", "Sorting"],

    tags: ["Array", "Heap", "Priority Queue", "Sorting"],

    description:
      "Given an integer array nums and an integer k, return the kth largest element in the array.",

    examples: [
      {
        input: "nums = [3,2,1,5,6,4], k = 2",
        output: "5",
        explanation: "The second largest element is 5.",
      },
      {
        input: "nums = [3,2,3,1,2,4,5,5,6], k = 4",
        output: "4",
        explanation: "The fourth largest element is 4.",
      },
    ],

    constraints: [
      "1 <= k <= nums.length <= 10^5",
      "-10^4 <= nums[i] <= 10^4",
    ],

    starterCode: {
      cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    int findKthLargest(vector<int>& nums, int k) {

    }
};`,
    },

    testCases: [
      {
        input: "[3,2,1,5,6,4]\n2",
        expectedOutput: "5",
      },
      {
        input: "[3,2,3,1,2,4,5,5,6]\n4",
        expectedOutput: "4",
      },
    ],
  },

  // =====================================================
  // HASHING
  // =====================================================

  {
    id: "contains-duplicate",
    title: "Contains Duplicate",
    topic: "hashing",
    difficulty: "Easy",

    source: "interview-os",

    leetcode: {
      available: true,
      url: "https://leetcode.com/problems/contains-duplicate/",
    },

    patterns: ["Hashing", "Sorting"],

    tags: ["Array", "Hash Table", "Sorting"],

    description:
      "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",

    examples: [
      {
        input: "nums = [1,2,3,1]",
        output: "true",
        explanation: "The value 1 appears more than once.",
      },
      {
        input: "nums = [1,2,3,4]",
        output: "false",
        explanation: "Every value appears exactly once.",
      },
    ],

    constraints: [
      "1 <= nums.length <= 10^5",
      "-10^9 <= nums[i] <= 10^9",
    ],

    starterCode: {
      cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {

    }
};`,
    },

    testCases: [
      {
        input: "[1,2,3,1]",
        expectedOutput: "true",
      },
      {
        input: "[1,2,3,4]",
        expectedOutput: "false",
      },
    ],
  },

  // =====================================================
  // GRAPH
  // =====================================================

  {
    id: "number-of-islands",
    title: "Number of Islands",
    topic: "graph",
    difficulty: "Medium",

    source: "interview-os",

    leetcode: {
      available: true,
      url: "https://leetcode.com/problems/number-of-islands/",
    },

    patterns: ["DFS", "BFS", "Graph"],

    tags: ["Array", "DFS", "BFS", "Matrix", "Graph"],

    description:
      "Given an m x n 2D binary grid which represents a map of '1's land and '0's water, return the number of islands.",

    examples: [
      {
        input: 'grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]',
        output: "1",
        explanation: "All connected land cells form one island.",
      },
      {
        input: 'grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]',
        output: "3",
        explanation: "There are three separate islands.",
      },
    ],

    constraints: [
      "m == grid.length",
      "n == grid[i].length",
      "1 <= m,n <= 300",
      "grid[i][j] is '0' or '1'.",
    ],

    starterCode: {
      cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    int numIslands(vector<vector<char>>& grid) {

    }
};`,
    },

    testCases: [
      {
        input: '[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]',
        expectedOutput: "1",
      },
    ],
  },

  {
    id: "clone-graph",
    title: "Clone Graph",
    topic: "graph",
    difficulty: "Medium",

    source: "interview-os",

    leetcode: {
      available: true,
      url: "https://leetcode.com/problems/clone-graph/",
    },

    patterns: ["BFS", "DFS", "Hashing"],

    tags: ["Graph", "BFS", "DFS", "Hash Table"],

    description:
      "Given a reference of a node in a connected undirected graph, return a deep copy of the graph.",

    examples: [
      {
        input: "adjList = [[2,4],[1,3],[2,4],[1,3]]",
        output: "[[2,4],[1,3],[2,4],[1,3]]",
        explanation: "The graph is deeply cloned.",
      },
      {
        input: "adjList = [[]]",
        output: "[[]]",
        explanation: "The graph contains one node with no neighbors.",
      },
    ],

    constraints: [
      "The number of nodes is in the range [0, 100].",
      "1 <= Node.val <= 100",
      "There are no repeated edges and no self-loops.",
    ],

    starterCode: {
      cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    Node* cloneGraph(Node* node) {

    }
};`,
    },

    testCases: [
      {
        input: "[[2,4],[1,3],[2,4],[1,3]]",
        expectedOutput: "[[2,4],[1,3],[2,4],[1,3]]",
      },
    ],
  },

  // =====================================================
  // GREEDY
  // =====================================================

  {
    id: "jump-game",
    title: "Jump Game",
    topic: "greedy",
    difficulty: "Medium",

    source: "interview-os",

    leetcode: {
      available: true,
      url: "https://leetcode.com/problems/jump-game/",
    },

    patterns: ["Greedy"],

    tags: ["Array", "Greedy"],

    description:
      "You are given an integer array nums. You are initially positioned at the array's first index. Each element represents your maximum jump length at that position. Determine if you can reach the last index.",

    examples: [
      {
        input: "nums = [2,3,1,1,4]",
        output: "true",
        explanation: "You can reach the last index.",
      },
      {
        input: "nums = [3,2,1,0,4]",
        output: "false",
        explanation: "The zero at index 3 prevents reaching the end.",
      },
    ],

    constraints: [
      "1 <= nums.length <= 10^4",
      "0 <= nums[i] <= 10^5",
    ],

    starterCode: {
      cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    bool canJump(vector<int>& nums) {

    }
};`,
    },

    testCases: [
      {
        input: "[2,3,1,1,4]",
        expectedOutput: "true",
      },
      {
        input: "[3,2,1,0,4]",
        expectedOutput: "false",
      },
    ],
  },

  // =====================================================
  // RECURSION
  // =====================================================

  {
    id: "fibonacci-number",
    title: "Fibonacci Number",
    topic: "recursion",
    difficulty: "Easy",

    source: "interview-os",

    leetcode: {
      available: true,
      url: "https://leetcode.com/problems/fibonacci-number/",
    },

    patterns: ["Recursion", "Dynamic Programming"],

    tags: ["Math", "Recursion", "Dynamic Programming"],

    description:
      "The Fibonacci numbers form a sequence where F(0) = 0, F(1) = 1, and F(n) = F(n - 1) + F(n - 2). Given n, calculate F(n).",

    examples: [
      {
        input: "n = 2",
        output: "1",
        explanation: "F(2) = F(1) + F(0) = 1.",
      },
      {
        input: "n = 4",
        output: "3",
        explanation: "F(4) = 3.",
      },
    ],

    constraints: [
      "0 <= n <= 30",
    ],

    starterCode: {
      cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    int fib(int n) {

    }
};`,
    },

    testCases: [
      {
        input: "2",
        expectedOutput: "1",
      },
      {
        input: "4",
        expectedOutput: "3",
      },
    ],
  },

  // =====================================================
  // BACKTRACKING
  // =====================================================

  {
    id: "subsets",
    title: "Subsets",
    topic: "backtracking",
    difficulty: "Medium",

    source: "interview-os",

    leetcode: {
      available: true,
      url: "https://leetcode.com/problems/subsets/",
    },

    patterns: ["Backtracking", "Recursion"],

    tags: ["Array", "Backtracking", "Bit Manipulation"],

    description:
      "Given an integer array nums of unique elements, return all possible subsets.",

    examples: [
      {
        input: "nums = [1,2,3]",
        output: "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]",
        explanation: "All possible subsets are returned.",
      },
      {
        input: "nums = [0]",
        output: "[[],[0]]",
        explanation: "There are two subsets.",
      },
    ],

    constraints: [
      "1 <= nums.length <= 10",
      "-10 <= nums[i] <= 10",
      "All elements of nums are unique.",
    ],

    starterCode: {
      cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    vector<vector<int>> subsets(vector<int>& nums) {

    }
};`,
    },

    testCases: [
      {
        input: "[1,2,3]",
        expectedOutput: "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]",
      },
      {
        input: "[0]",
        expectedOutput: "[[],[0]]",
      },
    ],
  },

  // =====================================================
  // DYNAMIC PROGRAMMING
  // =====================================================

  {
    id: "climbing-stairs",
    title: "Climbing Stairs",
    topic: "dynamic-programming",
    difficulty: "Easy",

    source: "interview-os",

    leetcode: {
      available: true,
      url: "https://leetcode.com/problems/climbing-stairs/",
    },

    patterns: ["Dynamic Programming", "Recursion"],

    tags: ["Math", "Dynamic Programming", "Memoization"],

    description:
      "You are climbing a staircase. It takes n steps to reach the top. Each time you can climb either 1 or 2 steps. Return the number of distinct ways to reach the top.",

    examples: [
      {
        input: "n = 2",
        output: "2",
        explanation: "There are two ways: 1+1 and 2.",
      },
      {
        input: "n = 3",
        output: "3",
        explanation: "There are three ways: 1+1+1, 1+2 and 2+1.",
      },
    ],

    constraints: [
      "1 <= n <= 45",
    ],

    starterCode: {
      cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    int climbStairs(int n) {

    }
};`,
    },

    testCases: [
      {
        input: "2",
        expectedOutput: "2",
      },
      {
        input: "3",
        expectedOutput: "3",
      },
    ],
  },

  // =====================================================
  // BIT MANIPULATION
  // =====================================================

  {
    id: "single-number",
    title: "Single Number",
    topic: "bit-manipulation",
    difficulty: "Easy",

    source: "interview-os",

    leetcode: {
      available: true,
      url: "https://leetcode.com/problems/single-number/",
    },

    patterns: ["Bit Manipulation"],

    tags: ["Array", "Bit Manipulation"],

    description:
      "Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.",

    examples: [
      {
        input: "nums = [2,2,1]",
        output: "1",
        explanation: "1 is the only element that appears once.",
      },
      {
        input: "nums = [4,1,2,1,2]",
        output: "4",
        explanation: "4 is the only element that appears once.",
      },
      {
        input: "nums = [1]",
        output: "1",
        explanation: "The only element is the answer.",
      },
    ],

    constraints: [
      "1 <= nums.length <= 3 * 10^4",
      "-3 * 10^4 <= nums[i] <= 3 * 10^4",
      "Every element appears twice except for one element.",
    ],

    starterCode: {
      cpp: `#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    int singleNumber(vector<int>& nums) {

    }
};`,
    },

    testCases: [
      {
        input: "[2,2,1]",
        expectedOutput: "1",
      },
      {
        input: "[4,1,2,1,2]",
        expectedOutput: "4",
      },
      {
        input: "[1]",
        expectedOutput: "1",
      },
    ],
  },
];

export default DsaQuestions;