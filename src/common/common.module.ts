import { Module } from '@nestjs/common';
import { HttpProvider } from './adapters/axios.adapter';

@Module({
    providers: [
        HttpProvider
    ],
    exports: [
        HttpProvider
    ]
})
export class CommonModule { }
