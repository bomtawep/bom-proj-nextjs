// Create Search component
import React from 'react';
import { Input, Button } from '@nextui-org/react';
import search from '@/components/styles/search.module.css';

export const Search = () => {
    return (
        <div className={'flex gap-2'}>
            <Input placeholder="Search" />
            <Button>Search</Button>
        </div>
    );
}