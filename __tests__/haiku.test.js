import { Haiku } from './../src/haiku.js' ;

describe('Haiku', () => {
  test('should correctly create three strings', () => {
    let haiku = new Haiku("I am a cat", "Hairball", "eat a lot");
    expect(haiku.string1).toEqual("I am a cat");
    expect(haiku.string2).toEqual("Hairball");
    expect(haiku.string3).toEqual("eat a lot");
  });
});
