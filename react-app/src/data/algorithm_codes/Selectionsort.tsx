import React from 'react'

const code = [
    'static void SelectionSort(int arr[])',
    '   for (int i = 0; i < arr.Length - 1; i++)',
    '     int minIndex = i;',
    '        for (int j = i + 1; j < arr.Length; j++)',
    '           if (arr[j] < arr[minIndex])',
    '               minIndex = j;',
    '       int temp = arr[minIndex];',
    '       arr[minIndex] = arr[i];',
    '       arr[i] = temp;',
    'static void Main(string[] args)',
    '   int[] arr = {5, 8, 10, 3, 9, 2, 4, 11};',
    '   Bubblesort(arr, 0, arr.Length - 1);'
]
const a = "{"
const b = "}"

const Selectionsort = () => {
  return (
    <div>
      <div>{code[0]}</div>
      <div>{a}</div>
      <div style={{marginLeft:20}}>{code[1]} </div>
      <div style={{marginLeft:20}}>{a}</div>
      <div style={{marginLeft:40}}>{code[2]} </div>
      <div style={{marginLeft:40}}>{code[3]} </div>
      <div style={{marginLeft:40}}>{a}</div>
      <div style={{marginLeft:60}}>{code[4]}</div>
      <div style={{marginLeft:60}}>{a}</div>
      
      <div style={{marginLeft:80}}>{code[5]}</div>
      <div style={{marginLeft:60}}>{b}</div>
      <div style={{marginLeft:40}}>{b}</div>
      <div style={{marginLeft:40}}>{code[6]}</div>
      <div style={{marginLeft:40}}>{code[7]}</div>
      <div style={{marginLeft:40}}>{code[8]}</div>
      <div style={{marginLeft:20}}>{b}</div>
      <div>{b}</div>
      <br/>
      <div>{code[9]}</div>
      <div>{a}</div>
      <div style={{marginLeft:20}}>{code[10]} </div>
      <div style={{marginLeft:20}}>{code[11]} </div>
      <div>{b}</div>
      <br/>
    </div>
  )
}

export default Selectionsort