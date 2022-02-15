import React from 'react'

const code = [
    'static void InsertionSort(int array[])',
    '   for(int i = 1; i < array.Length; i++)',
    '     if(array[i] < array[i - 1])',
    '       for(int j = i; j > 0; j--)',
    '         if(array[j] < array[j - 1])',
    '           int temp = array[j];',
    '           array[j] = array[j - 1];',
    '           array[j - 1] = temp;',
    'static void Main(string[] args)',
    '   int[] arr = {5, 8, 10, 3, 9, 2, 4, 11};',
    '   Bubblesort(arr, 0, arr.Length - 1);'
]

const a = "{";
const b = "}"


const Insertionsort = () => {
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
            <div style={{marginLeft:80}}>{a}</div>
            
            <div style={{marginLeft:100}}>{code[5]}</div>
            <div style={{marginLeft:100}}>{code[6]}</div>
            <div style={{marginLeft:100}}>{code[7]}</div>
            <div style={{marginLeft:80}}>{b}</div>
            <div style={{marginLeft:60}}>{b}</div>
            <div style={{marginLeft:40}}>{b}</div>
            <div style={{marginLeft:20}}>{b}</div>
            <div>{b}</div>
            <br/>
            <div>{code[8]}</div>
            <div>{a}</div>
            <div style={{marginLeft:20}}>{code[9]}</div>
            <div style={{marginLeft:20}}>{code[10]}</div>
            <div>{b}</div>
            <br/>
    </div>
  )
}

export default Insertionsort