import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Projects() {
    const navigate = useNavigate();

    function navigateBack() {
        navigate('/')
    }
    return (
        <div>
            Hello Projects!
        </div>
    )
}