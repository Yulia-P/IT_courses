const { AbilityBuilder, Ability } = require('@casl/ability')

let GUEST_ABILITY;

function defineAbilityFor(user) { 
    if (user) return new Ability(defineRulesFor(user))
    GUEST_ABILITY = GUEST_ABILITY || new Ability(defineRulesFor({}))
    return GUEST_ABILITY
}

function defineRulesFor(user) {
    const builder = new AbilityBuilder(Ability)
    if(!user?.role) {
        defineGuestRules(builder)
        return builder.rules;
    }

    switch (user.role) {
      case 'admin':
        defineAdminRules(builder, user)
        break;
      case 'user':
        defineUserRules(builder, user)
        break;
    }
  
    return builder.rules;
}

function defineAdminRules({ can }) {
    can('manage', 'all');
}

function defineUserRules({ can }, user) {
    can(['read', ['Enroll', 'Courses', 'Teacher']])
    can(['read', {id: user.id}])
    can(['create', ['Enroll']])
    can(['delete', ['Enroll']])
}

function defineGuestRules({ can }) {
    can('read', ['Courses', 'Teacher', 'Abilities']);
}

module.exports = {
    defineRulesFor,
    defineAbilityFor,
}