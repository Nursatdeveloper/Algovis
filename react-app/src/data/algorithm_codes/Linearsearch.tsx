import React from 'react'

const code = [
    'static void LinearSearch(int[] arr, int val)',
    '   for(int i = 0; i < arr.Length; i++)',
    '       if(arr[i] == val)',
    '           Console.WriteLine($"Value {val} is located at index {i}");',
    '   Console.WriteLine($"Array does not contain {val}}!);',
    'static void Main(string[] args)',
    '   int[] arr = {1, 4, 6, 2, 4, 7, 5, 2, 9};',
    '   LinearSearch(arr, 4);',
    '   LinearSearch(arr, 11);',
    '//Output:',
    '//Value 4 is located at index 1',
    '//Value 4 is located at index 4',
    '//Array does not contain 11!'
]

const a = "{";
const b = "}";

const Linearsearch = () => {
  return (
    <div>
        <div style={{marginLeft:0}}>{code[0]}</div>
        <div style={{marginLeft:0}}>{a}</div>
        <div style={{marginLeft:20}}>{code[1]}</div>
        <div style={{marginLeft:20}}>{a}</div>
        <div style={{marginLeft:40}}>{code[2]}</div>
        <div style={{marginLeft:40}}>{a}</div>
        <div style={{marginLeft:60}}>{code[3]}</div>
        <div style={{marginLeft:40}}>{b}</div>
        <div style={{marginLeft:20}}>{b}</div>
        <div style={{marginLeft:20}}>{code[4]}</div>
        <div style={{marginLeft:0}}>{b}</div>
        <br />
        <div style={{marginLeft:0}}>{code[5]}</div>
        <div style={{marginLeft:0}}>{a}</div>
        <div style={{marginLeft:20}}>{code[6]}</div>
        <div style={{marginLeft:20}}>{code[7]}</div>
        <div style={{marginLeft:20}}>{code[8]}</div>
        <div style={{marginLeft:0}}>{b}</div>
        <br/>
        <div style={{marginLeft:0}}>{code[9]}</div>
        <div style={{marginLeft:0}}>{code[10]}</div>
        <div style={{marginLeft:0}}>{code[11]}</div>
        <div style={{marginLeft:0}}>{code[12]}</div>

    </div>
  )
}

export default Linearsearch