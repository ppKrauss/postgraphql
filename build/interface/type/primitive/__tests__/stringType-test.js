"use strict";
const stringType_1 = require('../stringType');
test('name returns string', () => {
    expect(stringType_1.default.name).toBe('string');
});
test('isTypeOf will be true for any string', () => {
    expect(stringType_1.default.isTypeOf(undefined)).toBe(false);
    expect(stringType_1.default.isTypeOf(null)).toBe(false);
    expect(stringType_1.default.isTypeOf(true)).toBe(false);
    expect(stringType_1.default.isTypeOf(false)).toBe(false);
    expect(stringType_1.default.isTypeOf(21)).toBe(false);
    expect(stringType_1.default.isTypeOf(3.1415)).toBe(false);
    expect(stringType_1.default.isTypeOf('hello')).toBe(true);
    expect(stringType_1.default.isTypeOf({})).toBe(false);
    expect(stringType_1.default.isTypeOf([])).toBe(false);
    expect(stringType_1.default.isTypeOf(() => { })).toBe(false);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nVHlwZS10ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2ludGVyZmFjZS90eXBlL3ByaW1pdGl2ZS9fX3Rlc3RzX18vc3RyaW5nVHlwZS10ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw2QkFBdUIsZUFFdkIsQ0FBQyxDQUZxQztBQUV0QyxJQUFJLENBQUMscUJBQXFCLEVBQUU7SUFDMUIsTUFBTSxDQUFDLG9CQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0FBQ3hDLENBQUMsQ0FBQyxDQUFBO0FBRUYsSUFBSSxDQUFDLHNDQUFzQyxFQUFFO0lBQzNDLE1BQU0sQ0FBQyxvQkFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNsRCxNQUFNLENBQUMsb0JBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDN0MsTUFBTSxDQUFDLG9CQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzdDLE1BQU0sQ0FBQyxvQkFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUM5QyxNQUFNLENBQUMsb0JBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDM0MsTUFBTSxDQUFDLG9CQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQy9DLE1BQU0sQ0FBQyxvQkFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUMvQyxNQUFNLENBQUMsb0JBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDM0MsTUFBTSxDQUFDLG9CQUFVLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzNDLE1BQU0sQ0FBQyxvQkFBVSxDQUFDLFFBQVEsQ0FBQyxRQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtBQUMvRCxDQUFDLENBQUMsQ0FBQSJ9