import { Injectable } from '@nestjs/common';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InvoiceService {
  constructor (private prisma: PrismaService){}
  create(createInvoiceDto: CreateInvoiceDto) {
    return this.prisma.invoice.create({data: createInvoiceDto});
  }

  findAll() {

    return this.prisma.invoice.findMany({where: {lastSeen : false} });
  }

  findlastSeen(){
    return this.prisma.invoice.findMany({where: { lastSeen: true} });
  }

  findOne(id: number) {

    return this.prisma.invoice.findUnique({where:{ id} });
  }

  update(id: number, updateInvoiceDto: UpdateInvoiceDto) {
    return this.prisma.invoice.update({
      where: {id},
      data: updateInvoiceDto,
    })
  }

  remove(id: number) {
    return this.prisma.invoice.delete({ where: { id} });
  }
}
