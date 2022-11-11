let Anagram = require('./misc_test_with_jest');


describe('Testing the Anagram class', () => {

  beforeAll(() => {
    let basicAnagram;
    let list1;
    let list2;
    let list3;
  })
  beforeEach(() => {
    basicAnagram = new Anagram('repaints');
    list1 = ['dog', 'house', ,'repaints','painters', 'pantries', 'pertains'];
    list2 = ['parsley', 'parleys', 'players', 'replays', 'sparely'];
    list3 = ['pantries', 'house', 'smoke', 'people']
    list4 = ['pANtries'];
  })

  test('Anagram is a class', () => {
    expect(new Anagram instanceof Anagram).toBe(true);
  });

  test("words are stored as lowercased", () => {
    expect(new Anagram('bathRoom').getWord()).toBe('bathroom');
  });

  test("can match one word", () => {
    expect(basicAnagram.match(list3)).toEqual(['pantries']);
  })

  test("case insensitive matching", () => {
    expect(basicAnagram.match(list4)).toEqual(list4);
  });

  test("does not include the tested word in matches", () => {
    expect(basicAnagram.match(list1)).not.toContain('repaints');
  });
})