const validateForm = (id, value) => {
  switch (id) {
    case 'name':
      if (value.length === 0) return 'Name is required';
      if (value.length < 3) return 'Name must be at least 3 characters';
      return '';
    case 'email':
      if (value.length === 0) return 'Email is required';
      if (!/[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/.test(value)) return 'Invalid email';
      return '';
    case 'phone':
      if (value.length === 0) return 'Phone number is required';
      if (!/^[0-9]*$/.test(value)) return 'Invalid phone number';
      if (value.length !== 10) return 'Phone number must be 10 digits';
      return '';
    case 'message':
      if (value.length === 0) return 'Message is required';
      return '';
    default:
      return '';
  }
}
export { validateForm }