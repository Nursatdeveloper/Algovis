import React from 'react'
const code = [
    'static void BubbleSort(int arr[])',
    '   for (int i = 0; i < arr.Length; i++)',
    '        for (int j = 0; j < arr.Length-i-1; j++)',
    '           if (arr[j] > arr[j+1])',
    '               int temp = arr[j];',
    '               arr[j] = arr[j+1];',
    '               arr[j+1] = temp;',
    'static void Main(string[] args)',
    '   int[] arr = {5, 8, 10, 3, 9, 2, 4, 11};',
    '   Bubblesort(arr, 0, arr.Length - 1);'



]
const a = "{";
const b = "}";
const Bubblesort = () => {
  return (
    <div>
            <div>{code[0]}</div>
            <div>{a}</div>
            <div style={{marginLeft:20}}>{code[1]} </div>
            <div style={{marginLeft:20}}>{a}</div>
            <div style={{marginLeft:40}}>{code[2]} </div>
            <div style={{marginLeft:40}}>{a}</div>
            <div style={{marginLeft:60}}>{code[3]} </div>
            <div style={{marginLeft:60}}>{a}</div>
            <div style={{marginLeft:80}}>{code[4]}</div>
            <div style={{marginLeft:80}}>{code[5]}</div>
            <div style={{marginLeft:80}}>{code[6]}</div>
            <div style={{marginLeft:60}}>{b}</div>
            <div style={{marginLeft:40}}>{b}</div>
            <div style={{marginLeft:20}}>{b}</div>
            <br/>
            <div>{code[7]}</div>
            <div style={{marginLeft:0}}>{a} </div>
            <div style={{marginLeft:20}}>{code[8]} </div>
            <div style={{marginLeft:20}}>{code[9]} </div>
            <div style={{marginLeft:0}}>{b} </div>
            <br/>
    </div>
  )
}

export default Bubblesort