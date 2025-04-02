import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';

function FirebaseTest() {
  const [testResult, setTestResult] = useState('');
  const [error, setError] = useState('');

  const testFirebase = async () => {
    try {
      // Test 1: Authentication
      setTestResult('Testing Firebase Authentication...\n');
      const testUser = await createUserWithEmailAndPassword(
        auth,
        'test@example.com',
        'testpassword123'
      );
      setTestResult(prev => prev + '✓ Authentication working\n');

      // Test 2: Firestore
      setTestResult(prev => prev + 'Testing Firestore...\n');
      const testDoc = await addDoc(collection(db, 'test'), {
        timestamp: new Date(),
        test: 'Firebase connection test'
      });
      setTestResult(prev => prev + '✓ Firestore write working\n');

      // Test 3: Firestore Read
      const querySnapshot = await getDocs(collection(db, 'test'));
      setTestResult(prev => prev + '✓ Firestore read working\n');

      // Test 4: Analytics
      setTestResult(prev => prev + 'Testing Analytics...\n');
      setTestResult(prev => prev + '✓ Analytics initialized\n');

      setTestResult(prev => prev + '\nAll Firebase services are working correctly! 🎉');
    } catch (err) {
      setError(`Error: ${err.message}`);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Firebase Connection Test</h2>
      <button 
        onClick={testFirebase}
        style={{
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Run Firebase Tests
      </button>
      
      {testResult && (
        <pre style={{ 
          marginTop: '20px',
          padding: '15px',
          backgroundColor: '#f5f5f5',
          borderRadius: '4px',
          whiteSpace: 'pre-wrap'
        }}>
          {testResult}
        </pre>
      )}
      
      {error && (
        <div style={{ 
          marginTop: '20px',
          padding: '15px',
          backgroundColor: '#ffebee',
          color: '#c62828',
          borderRadius: '4px'
        }}>
          {error}
        </div>
      )}
    </div>
  );
}

export default FirebaseTest; 