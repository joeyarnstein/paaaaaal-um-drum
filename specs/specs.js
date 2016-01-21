describe('palindromeChecker', function () {
  it('returns false for input that is not a palindrome', function() {
    expect(palindromeChecker('dog')).to.equal(false);
  });
  it('returns true for input word that is a palindrome', function() {
    expect(palindromeChecker('tacocat')).to.equal(true);
  });
  it('returns true for input number that is a palindrome', function() {
    expect(palindromeChecker('40504')).to.equal(true);
  });
});
