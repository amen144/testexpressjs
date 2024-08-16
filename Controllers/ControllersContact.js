const Contact = require('../Model/Contact');

exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.getAll();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getContactById = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await Contact.getById(id);
    if (contact) {
      res.status(200).json(contact);
    } else {
      res.status(404).json({ message: 'Contact not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createContact =  async(req, res) => {
  try {
    const { name, age, email, phone, password } = req.body;
    console.log('Received data:', { name, age, email, phone, password });

    const contact = await Contact.create({ name, age, email, phone, password });
    console.log("message",contact);
    
    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateContact = async (req, res) => {
  try {
    const { id } = req.params;
    const { editname, editage, editemail, editphone, editpassword } = req.body;
    console.log(editname, editage, editemail, editphone, editpassword);
    
    const contact = await Contact.update(id, { editname, editage, editemail, editphone, editpassword });
    if (contact) {
      res.status(200).json(contact);
    } else {
      res.status(404).json({ message: 'Contact not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    const contact = await Contact.delete(id);
    if (contact) {
      res.status(200).json({ message: 'Contact deleted successfully' });
    } else {
      res.status(404).json({ message: 'Contact not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
