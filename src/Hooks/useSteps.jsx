import { useState } from "react"


export function useSteps(steps){

    const [currentStep,SetCurrentStep] = useState(0)
    
    function changeSteps(i,e){

        if(e) e.preventDefault();
        

        if(i<0 || i>=steps.length) return;

        SetCurrentStep(i)
    
    }
    return{
    currentStep,
    currentComponent: steps[currentStep],
    changeSteps,
    firstStep: currentStep === 0,
    lastStep: currentStep + 1 == steps.length,
    }
}