import React from 'react'

const code = [
    'static int BinarySearch(int[] arr, int value, int low, int high)',
    '   int mid = low+(low+high)/2;',
    '   while(low <= high)',
    '       if(arr[mid] == value)',
    '           return mid;',
    '       if(array[mid] > value)',
    '           high = mid - 1;',
    '       else',
    '           low = mid + 1;',
    '   return -1;',
    'static void Main(string[] args)',
    '   int[] array = {1, 2, 3, 4, 5, 6};',
    '   int index = BinarySearch(array, 2, 0, 5);',
    '   Console.WriteLine(index) // 1',
    '//To do binary search an array must be sorted'
]

const a = "{";
const b = "}";

const BinarySearch = () => {
  return (
    <div>
        <div style={{marginLeft:0}}>{code[0]}</div>
        <div style={{marginLeft:0}}>{a}</div>
        <div style={{marginLeft:20}}>{code[1]}</div>
        <div style={{marginLeft:20}}>{code[2]}</div>
        <div style={{marginLeft:20}}>{a}</div>
        <div style={{marginLeft:40}}>{code[3]}</div>
        <div style={{marginLeft:40}}>{a}</div>
        <div style={{marginLeft:60}}>{code[4]}</div>
        <div style={{marginLeft:40}}>{b}</div>
        <div style={{marginLeft:40}}>{code[5]}</div>
        <div style={{marginLeft:40}}>{a}</div>
        <div style={{marginLeft:60}}>{code[6]}</div>
        <div style={{marginLeft:40}}>{b}</div>
        <div style={{marginLeft:40}}>{code[7]}</div>
        <div style={{marginLeft:40}}>{a}</div>
        <div style={{marginLeft:60}}>{code[8]}</div>
        <div style={{marginLeft:40}}>{b}</div>
        <div style={{marginLeft:20}}>{code[9]}</div>
        <div style={{marginLeft:0}}>{b}</div>
        <br/>
        <div style={{marginLeft:0}}>{code[10]}</div>
        <div style={{marginLeft:0}}>{a}</div>
        <div style={{marginLeft:20}}>{code[11]}</div>
        <div style={{marginLeft:20}}>{code[12]}</div>
        <div style={{marginLeft:20}}>{code[13]}</div>
        <div style={{marginLeft:0}}>{b}</div>
        <div style={{marginLeft:0}}>{code[14]}</div>
    </div>
  )
}

export default BinarySearch