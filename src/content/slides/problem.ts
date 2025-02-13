export const problem = {
  screens: [
    {
      id: 'problem-impact',
      title: 'Problem',
      statistic: {
        number: 184,
        unit: 'M',
        description: 'of women in the U.S.'
      },
      mainText: 'have at least one risk factor for cardiometabolic disease with only <12% receiving care with 7-10 years of delay in diagnosis.'
    },
    {
      id: 'problem-education',
      title: 'Cardiometabolic Disease',
      subtitle: 'The Deadly Connection Between Four Major Conditions',
      description: [
        'Cardiometabolic disease is a cluster of interconnected, life-threatening conditions significantly increasing health risks.',
        'These conditions are deeply linked, making prevention and early intervention critical.'
      ],
      conditions: [
        { name: 'Cardiovascular Disease', icon: 'heart' },
        { name: 'Diabetes', icon: 'diabetes' },
        { name: 'Chronic Kidney Disease (CKD)', icon: 'kidney' },
        { name: 'Nonalcoholic Fatty Liver Disease (NAFLD)', icon: 'liver' }
      ]
    }
  ]
}
