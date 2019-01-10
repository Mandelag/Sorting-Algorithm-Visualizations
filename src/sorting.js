/* eslint-disable */

export function randomize(component, arr){
    let newArr = []
    for(let x=0; x<arr.length; x++){
        newArr.push({
            value: Math.floor(Math.random() * 100) + 1
         })
    }
    component.setState({
        data: newArr,
    })
 }

export async function selectionSort(component){
    let arr1 = []
    let arr2 = []
    let temp

    component.state.data.map((n) => 
         arr1.push(n.value)
    )

    for(let x=0; x<arr1.length-1; x++){
        let index = x
        for(let y=index+1; y<arr1.length; y++){
            if(arr1[y] < arr1[index]){
                index = y;
            }
        }
        if(index !== x){
            temp = arr1[x]
            arr1[x] = arr1[index]
            arr1[index] = temp
        }

        arr1.map((n) => {
         arr2.push({value: n})
        })

        component.setState({
         data: arr2,
        })

        await sleep(250)
     
        arr2 = []
    }
 }

 export async function bubbleSort(component){
    let arr1 = []
    let arr2 = []
    let sorted = false
    let temp

    component.state.data.map((n) => 
        arr1.push(n.value)
    )
    
     while(!sorted){

        sorted = true

        for(let x=0; x<arr1.length-1; x++){
            if(arr1[x+1] < arr1[x]){
                sorted = false
                break
            }
        }

        for(let x=0; x<arr1.length-1; x++){
            if(arr1[x+1] < arr1[x]){
                temp = arr1[x]
                arr1[x] = arr1[x+1]
                arr1[x+1] = temp
            }
            arr1.map((n) => {
                arr2.push({value: n})
            })
            component.setState({
                data: arr2,
            })

            await sleep(250)

            arr2 = []
        
        } 

    }  
}

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

 function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

