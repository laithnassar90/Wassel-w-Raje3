import { useState, useEffect } from 'react';

export type FlowStep = 'welcome' | 'find-ride' | 'offer-ride' | 'booking' | 'payment' | 'trip-active' | 'completed';

export interface UserFlowState {
  currentStep: FlowStep;
  isFirstTime: boolean;
  hasActiveTrip: boolean;
  completedSteps: FlowStep[];
}

export const useUserFlow = () => {
  const [flowState, setFlowState] = useState<UserFlowState>({
    currentStep: 'welcome',
    isFirstTime: true,
    hasActiveTrip: false,
    completedSteps: []
  });

  const navigateToStep = (step: FlowStep) => {
    setFlowState(prev => ({
      ...prev,
      currentStep: step,
      completedSteps: prev.completedSteps.includes(step) 
        ? prev.completedSteps 
        : [...prev.completedSteps, step]
    }));
  };

  const completeOnboarding = () => {
    setFlowState(prev => ({
      ...prev,
      isFirstTime: false
    }));
  };

  const startTrip = () => {
    setFlowState(prev => ({
      ...prev,
      hasActiveTrip: true,
      currentStep: 'trip-active'
    }));
  };

  const completeTrip = () => {
    setFlowState(prev => ({
      ...prev,
      hasActiveTrip: false,
      currentStep: 'completed'
    }));
  };

  return {
    flowState,
    navigateToStep,
    completeOnboarding,
    startTrip,
    completeTrip
  };
};
