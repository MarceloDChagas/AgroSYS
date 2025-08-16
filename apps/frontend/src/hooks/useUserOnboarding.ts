import { useState, useEffect } from "react";

interface OnboardingState {
  hasSeenAlertsTutorial: boolean;
  hasSeenDashboardTutorial: boolean;
  isNewUser: boolean;
}

export function useUserOnboarding() {
  const [onboardingState, setOnboardingState] = useState<OnboardingState>({
    hasSeenAlertsTutorial: false,
    hasSeenDashboardTutorial: false,
    isNewUser: true,
  });

  useEffect(() => {
    // Carregar estado do localStorage
    const savedState = localStorage.getItem("agrosys_onboarding");
    if (savedState) {
      const parsed = JSON.parse(savedState);
      setOnboardingState(parsed);
    }
  }, []);

  const markAlertsTutorialAsSeen = () => {
    const newState = {
      ...onboardingState,
      hasSeenAlertsTutorial: true,
      isNewUser: false,
    };
    setOnboardingState(newState);
    localStorage.setItem("agrosys_onboarding", JSON.stringify(newState));
  };

  const markDashboardTutorialAsSeen = () => {
    const newState = {
      ...onboardingState,
      hasSeenDashboardTutorial: true,
      isNewUser: false,
    };
    setOnboardingState(newState);
    localStorage.setItem("agrosys_onboarding", JSON.stringify(newState));
  };

  const resetOnboarding = () => {
    const newState = {
      hasSeenAlertsTutorial: false,
      hasSeenDashboardTutorial: false,
      isNewUser: true,
    };
    setOnboardingState(newState);
    localStorage.setItem("agrosys_onboarding", JSON.stringify(newState));
  };

  return {
    ...onboardingState,
    markAlertsTutorialAsSeen,
    markDashboardTutorialAsSeen,
    resetOnboarding,
  };
}
