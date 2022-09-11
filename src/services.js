import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import firebase from './FireBase';

function services() {

    const ref = firebase.firestore().collection("LoginDetails");
    console.log(ref);

    const [input, setInput] = useState('');
    const [loginList, setLoginDetails] = useState([]);

    useEffect(() => {
        firebase.collection('productsDetails').onSnapshot(snapshot => {
            setLoginDetails(snapshot.docs.map(doc => ({ id: doc.email, loginDetails: doc.data().userName })))
        })

    }, []);



}

export default services;