import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import {InvoiceService } from './invoice.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';

@Controller('invoice')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Post()
  create(@Body() createInvoicesDto: CreateInvoiceDto) {
    return this.invoiceService.create(createInvoicesDto);
  }

  @Get()
  findAll() {
    return this.invoiceService.findAll();
  }

  @Get('/lastSeen')
  findlastSeen(@Param('id') id: string) {
    return this.invoiceService.findlastSeen();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInvoicesDto: UpdateInvoiceDto) {
    return this.invoiceService.update(+id, updateInvoicesDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.invoiceService.remove(+id);
  }
}
