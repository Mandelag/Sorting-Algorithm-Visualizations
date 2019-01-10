/* eslint-disable */

export function randomize(size){
    let newArr = []
    for(let x=0; x<size; x++){
        newArr.push(Math.floor(Math.random() * 100) + 1)
    }
    return newArr
 }

export function selectionSort(arr){
    let temp
    for(let x=0; x<arr.length-1; x++){
        let index = x
        for(let y=index+1; y<arr.length; y++){
            if(arr[y].value < arr[index].value){
                index = y;
            }
        }
        if(index !== x){
            temp = arr[x]
            arr[x] = arr[index]
            arr[index] = temp
        }
    }
    return arr
 }

 export async function bubbleSort(arr){
    let sorted = false
    let temp
    
     while(!sorted){

        sorted = true

        for(let x=0; x<arr.length-1; x++){
            if(arr[x+1] < arr[x]){
                sorted = false
                break
            }
        }

        for(let x=0; x<arr.length-1; x++){
            if(arr[x+1] < arr[x]){
                temp = arr[x]
                arr[x] = arr[x+1]
                arr[x+1] = temp
            }
        
        } 

    }  
}

function sleep() {
    return new Promise(resolve => {

    });
  }

/*
export function mergeSort(component){
    
    let arr1 = []
    let arr2 = []
    component.state.data.map((n) => {
       arr1.push(n.value)
    })
    
    arr1 = divide(arr1, component)
 }

function divide(arr,component){ //part of merge sort
    if(arr.length == 1){
        return arr
    }

    const middle = Math.floor(arr.length / 2)
    const left = arr.slice(0,middle)
    const right = arr.slice(middle)

    return merge(
        divide(left, component),
        divide(right, component),
        component
    )
}

function merge(left, right, component) { //part of merge sort

    let arr1 = []
    let arr2 = []
    let leftIndex = 0
    let rightIndex = 0

    while(leftIndex < left.length && rightIndex < right.length){
        if (left[leftIndex] < right[rightIndex]) {
            arr1.push(left[leftIndex])
            leftIndex++
          } else {
            arr1.push(right[rightIndex])
            rightIndex++
          }
    }

    arr1 = arr1.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
    
    arr1.map((n) => {
        arr2.push({value: n})
    })

    component.setState({
        data: arr2
    })

    return arr1
 }
 */


