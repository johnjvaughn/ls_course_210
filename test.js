function Contact(name, gender) {
  if (!(this instanceof Contact)) {
    return new Contact(name, gender);
  }
  this.name = name;
  this.gender = gender;
}

Contact.prototype.hasName = function(name) {
  return (this.name === name);
}

var contacts = {
  list: [],
  add: function(name, gender) {
    var contact = new Contact(name, gender);
    this.list.push(contact);
  },
  males: function() {
    return this.list.filter(function(contact) {
      return contact.gender === 'male';
    });
  },
  females: function() {
    return this.list.filter(function(contact) {
      return contact.gender === 'female';
    });
  },
  filterByName: function(name) {
    return this.list.filter(function(contact) {
      return contact.hasName(name)
    });
  },
};

contacts.add('Bill', 'male');
contacts.add('Betsy', 'female');
contacts.add('Kate', 'female');
pa(contacts.males());
pa(contacts.females());
pa(contacts.filterByName('Betsy'));