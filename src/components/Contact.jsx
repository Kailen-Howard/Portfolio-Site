import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiMail, FiSend } from 'react-icons/fi';

const ContactContainer = styled(motion.div)`
  min-height: 100vh;
  padding: 8rem 2rem 2rem;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--color-text);
  font-family: var(--font-mono);
  
  span {
    color: var(--color-primary);
  }
`;

const Description = styled(motion.p)`
  color: var(--color-text);
  opacity: 0.8;
  margin-bottom: 3rem;
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 600px;
`;

const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
`;

const FormGroup = styled.div`
  position: relative;
`;

const Label = styled.label`
  position: absolute;
  left: 1rem;
  top: -0.5rem;
  background: var(--color-background);
  padding: 0 0.5rem;
  color: var(--color-primary);
  font-size: 0.8rem;
  font-family: var(--font-mono);
`;

const Input = styled(motion.input)`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  color: var(--color-text);
  font-family: var(--font-mono);
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 0 3px rgba(var(--color-primary-rgb), 0.1);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const Textarea = styled(Input).attrs({ as: 'textarea' })`
  min-height: 150px;
  resize: vertical;
`;

const Button = styled(motion.button)`
  padding: 1rem 2rem;
  background: var(--color-primary);
  color: var(--color-background);
  border: none;
  border-radius: 4px;
  font-family: var(--font-mono);
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--color-secondary);
    transform: translateY(-2px);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const Message = styled(motion.div)`
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  font-family: var(--font-mono);
  
  ${props => props.type === 'success' && `
    background: rgba(0, 255, 0, 0.1);
    border: 1px solid var(--color-primary);
    color: var(--color-primary);
  `}
  
  ${props => props.type === 'error' && `
    background: rgba(255, 0, 0, 0.1);
    border: 1px solid #ff0000;
    color: #ff0000;
  `}
`;

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const subject = `Portfolio Contact from ${formState.name}`;
      const body = `
Name: ${formState.name}
Email: ${formState.email}

Message:
${formState.message}
      `;
      
      window.location.href = `mailto:kailen.howard@protonmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <ContactContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Title
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Let's <span>Connect</span>
      </Title>
      
      <Description
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Have a project in mind or just want to chat? Feel free to reach out. 
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
      </Description>

      {status && (
        <Message
          type={status}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          {status === 'success' 
            ? "Thanks for reaching out! I'll get back to you soon."
            : "Oops! Something went wrong. Please try again later."}
        </Message>
      )}

      <Form
        onSubmit={handleSubmit}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <FormGroup>
          <Label>Name</Label>
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formState.name}
            onChange={handleChange}
            required
            data-hoverable
          />
        </FormGroup>

        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formState.email}
            onChange={handleChange}
            required
            data-hoverable
          />
        </FormGroup>

        <FormGroup>
          <Label>Message</Label>
          <Textarea
            name="message"
            placeholder="Your Message"
            value={formState.message}
            onChange={handleChange}
            required
            data-hoverable
          />
        </FormGroup>

        <Button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          data-hoverable
        >
          {isSubmitting ? (
            'Sending...'
          ) : (
            <>
              Send Message <FiSend />
            </>
          )}
        </Button>
      </Form>
    </ContactContainer>
  );
};

export default Contact;
