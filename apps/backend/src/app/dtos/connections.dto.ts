import { IConnections } from '@everyhero/lib-types';
import { ApiProperty } from '@nestjs/swagger';

export class ConnectionsDto implements IConnections {
    @ApiProperty({
        description: 'Relatives',
        example:
            'Brian Xavier (father, deceased), Sharon Xavier (mother, deceased), Cassandra Nova (sister), Kurt Marko (stepfather, deceased), Cain Marko (Juggernaut, stepbrother), Lilandra (ex-wife), David Charles Haller (Legion, son, deceased)',
    })
    relatives: string;
    @ApiProperty({
        description: 'Group Affiliation',
        example:
            'Formerly X-Men (founder; formerly teacher & leader), Illuminati, Genoshan Excalibur, Brotherhood of Evil Mutants (leader), Cadre K, Generation X (founder), Starjammers, The Twelve, New Mutants (founder, teacher & leader), United States Army, X-Corporation',
    })
    'group-affiliation': string;
}
