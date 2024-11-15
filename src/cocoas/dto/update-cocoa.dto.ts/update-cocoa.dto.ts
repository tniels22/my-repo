import { PartialType } from '@nestjs/mapped-types';
import { CreateCocoaDto } from '../create-cocoa.dto.ts/create-cocoa.dto';
export class UpdateCocoaDto extends PartialType(CreateCocoaDto) {
}
