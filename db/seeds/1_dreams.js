
exports.seed = function (knex, Promise) {
  return knex('dreams').del()
    .then(function () {
      return knex('dreams').insert([
        {
          id: 1, dream_date: '5-29-17', emotion: 'fear', lucidity: 1, nightmare: false, recurring: false, user_username: 'missalyss',
          body: "Sophie, my partner's daughter, was missing. Donald Trump had taken her under some legal pretense, like he had some custody over her. And I was not going to allow that to happen, legal or not. He would be getting her near an underground subway station and I had to get there to either take her from him or get her before he got her. It was really difficult to get there and I kept getting confused and lost.",
          interpretation: "I'm afraid about how our current government will affect me personally; but I also feel reassured that I will fight back and not be content to sacrifice things that are important to me."
        },
        {
          id: 2, dream_date: '6-1-17', emotion: 'happy', lucidity: 1, nightmare: false, recurring: false, user_username: 'andromeda111',
          body: "I was outside a shop with my childhood friend, Sarah, when Kermit the Frog was on his way in. He was smoking, but it was common knowledge that Kermit was a smoker. We got excited and he let us take pictures with him. Then he and I started doing shuffle-off-the-buffalo and we were perfectly in sinc. I was star struck. We danced all the way into a culdasac where we fell into the driveway and I rolled into some wet dog shit, which was kind of annoying.",
          interpretation: "Even as an adult, I find delight in a lot of the things I enjoyed as a child, even if they aren't as pure or magical as they used to be."
        },
        {
          id: 3, dream_date: '6-2-17', emotion: 'frustrated', lucidity: 1, nightmare: false, recurring: false, user_username: 'Baatzy',
          body: "My brother, Emerson, was single and had been interested in a girl for a while. She was Elle Fanning, but wasn't a famous actress. My other brother, Spencer, asked me to go with him to pick her up so she and Emerson could go on a date. When we got to her house, she was really excited, but then it turned out Spencer had lied to us; Emerson and she were never supposed to go on a date. I was so mad at Spencer because he had got her hopes up and had pulled me along and didn't care about inconveniencing either of us. I was so angry that I hit him, and even then he didn't care. It deeply bothered me that he didn't care about any of it.",
          interpretation: "This may be related to how I've felt lately, that my brothers don't care too much when I fly home to visit and how much that hurts. No matter how much I want to make them care, I can't make them feel any certain way."
        },
        {
          id:4, dream_date: '6-2-17', emotion: 'happy', lucidity: 3, nightmare: false, recurring: false, user_username: 'amaliaclaire',
          body: "Scott, Brendon's brother, came to pick me up as I was walking to their mom's house on a dirt road. I was thinking of a function, where the passenger in the car was the only argument put into the function. The driving route was in a loop, so I had known before they got me that they would be there while the function was executing. In the car now, Scott was driving and Brendon was in the passenger seat, and their mom was in the back seat next to me. She had been picked up in the previous execution of the function. I was the last person picked up. It was a quiet summer evening and I felt very calm and peaceful. No one was talking. I looked around at everyone and felt love for them.",
          interpretation: "While thinking about the function, I was enjoying the challenge of thinking of a real world thing in the context of dev thinking. It probably connects to how I look at problem solving differently now that I'm a developmer. I'm not super close to Brendon's family, so I think feeling peace with them symbolizes my longing for family and finding it with Brendon and Sophie. Which makes me feel really happy."
        },
        {
          id:5, dream_date: '6-3-17', emotion: 'happy', lucidity: 5, nightmare: false, recurring: true, user_username: 'andromeda111',
          body: "What? We're not at all alike! They were just sucked into space. Now, how the hell do we defeat an enemy that knows us better than we know ourselves? Mr. Crusher, ready a collision course with the Borg ship. I'll be sure to note that in my log. Why don't we just give everybody a promotion and call it a night - 'Commander'? Damage report! Besides, you look good in a dress. Sorry, Data. I suggest you drop it, Mr. Data.",
          interpretation: "I will obey your orders. I will serve this ship as First Officer. And in an attack against the Enterprise, I will die with this crew. But I will not break my oath of loyalty to Starfleet. A lot of things can change in twelve years, Admiral. Mr. Crusher, ready a collision course with the Borg ship."
        }
      ])
    }).then(function () {
      return knex.raw(
        "SELECT setval('dreams_id_seq', (SELECT MAX (id) FROM dreams))"
      )
    }).catch(function (error) {
      console.error('Red Alert! ', error)
    })
}
