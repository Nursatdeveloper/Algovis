import React from 'react'

const a = "{";
const b = "}";

const code = [
    'static void Quicksort(int arr[], int low, int high)',
    'if(low < high)', 
    'int p_Index = Partition(arr, low, high);',      
    'Quicksort(arr, low, p_Index - 1);',
    'Quicksort(arr, p_Index + 1, high);',

    'static int Partition(int[] arr, int low, int high)',
        'int pivot = arr[high];',
        'int i = (low - 1);',
        'for(int j = low; j <= high - 1; j++)',
            'if(arr[j] < pivot)',
                'i++;',
                'swap(arr, i, j);',
        'swap(arr, i + 1, high);',
        'return i+1;',
    'static void Swap(int arr[], int i, int j)',
        'int temp = arr[i];',
        'arr[i] = arr[j];',
        'arr[j] = temp;',
        'static void Main(string[] args)',
        'int[] arr = {5, 8, 10, 3, 9, 2, 4, 11};',
        'Quicksort(arr, 0, arr.Length - 1);'
]

const Quicksort = () => {
  return (
    <div>
        <div style={{marginLeft:0}}>{code[0]}</div>
        <div style={{marginLeft:0}}>{a}</div>
        <div style={{marginLeft:20}}>{code[1]}</div>
        <div style={{marginLeft:20}}>{a}</div>
        <div style={{marginLeft:40}}>{code[2]}</div>
        <div style={{marginLeft:40}}>{code[3]}</div>
        <div style={{marginLeft:40}}>{code[4]}</div>
        <div style={{marginLeft:20}}>{b}</div>
        <div style={{marginLeft:0}}>{b}</div>
        <br/>
        <div style={{marginLeft:0}}>{code[5]}</div>
        <div style={{marginLeft:0}}>{a}</div>
        <div style={{marginLeft:20}}>{code[6]}</div>
        <div style={{marginLeft:20}}>{code[7]}</div>
        <div style={{marginLeft:20}}>{code[8]}</div>
        <div style={{marginLeft:20}}>{a}</div>
        <div style={{marginLeft:40}}>{code[9]}</div>
        <div style={{marginLeft:40}}>{a}</div>
        <div style={{marginLeft:60}}>{code[10]}</div>
        <div style={{marginLeft:60}}>{code[11]}</div>
        <div style={{marginLeft:40}}>{b}</div>
        <div style={{marginLeft:20}}>{b}</div>
        <div style={{marginLeft:20}}>{code[12]}</div>
        <div style={{marginLeft:20}}>{code[13]}</div>
        <div style={{marginLeft:0}}>{b}</div>
        <br/>
        <div style={{marginLeft:0}}>{code[14]}</div>
        <div style={{marginLeft:0}}>{a}</div>
        <div style={{marginLeft:20}}>{code[15]}</div>
        <div style={{marginLeft:20}}>{code[16]}</div>
        <div style={{marginLeft:20}}>{code[17]}</div>
        <div style={{marginLeft:0}}>{b}</div>
        <br/>
        <div style={{marginLeft:0}}>{code[18]}</div>
        <div style={{marginLeft:0}}>{a}</div>
        <div style={{marginLeft:20}}>{code[19]}</div>
        <div style={{marginLeft:20}}>{code[20]}</div>
        <div style={{marginLeft:0}}>{b}</div>
        <br/>
    </div>
  )
}

export default Quicksort