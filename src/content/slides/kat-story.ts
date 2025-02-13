export const katStory = {
  screens: [
    {
      id: 'meet-kat',
      title: "Kat's Story: A Healthcare System That Failed Her",
      initialSymptoms: [
        "At 42, Kat felt exhausted, dizzy, and had heart palpitations",
        "Doctors dismissed her symptoms as stress",
        "Over time, she developed swelling, weight gain, and nausea"
      ]
    },
    {
      id: 'system-failure',
      title: 'How The System Failed Kat',
      doctorVisits: [
        {
          specialist: 'Cardiologist',
          response: 'checks her heart but finds "nothing urgent."'
        },
        {
          specialist: 'Endocrinologist',
          response: 'says her blood sugar is "borderline" but not bad enough for treatment.'
        },
        {
          specialist: 'General Practitioner',
          response: 'prescribes anxiety meds for her fatigue and heart palpitations.'
        },
        {
          specialist: 'Gastroenterologist',
          response: 'tells her she has mild fatty liver and should "eat better."'
        }
      ],
      outcome: {
        diagnosis: 'Years later, she was finally diagnosed with diabetes, heart disease, kidney disease, and fatty liver—conditions that could have been prevented.',
        impact: 'Now, she faces lifelong medication, increased disability risks, and mounting healthcare costs.'
      }
    }
  ]
}
