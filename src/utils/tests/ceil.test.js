// local imports
import ceil from '../ceil'

describe('Utils', function() {
    describe('Ceil to util', function() {
        it('returns the correct value', function () {
            expect(ceil(75, 50)).to.equal(100)
        })
    })
})
