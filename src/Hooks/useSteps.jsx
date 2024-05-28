import { useState } from "react"


export function useSteps(steps){

    const [currentStep,SetCurrentStep] = useState(0)
    
    function changeSteps(i,e){
        
    }
    return{
    currentStep,
    currentComponent: steps[currentStep]
    }
}