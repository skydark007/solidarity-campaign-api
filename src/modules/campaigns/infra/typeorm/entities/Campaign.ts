import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from 'typeorm';

import CampaignProduct from './CampaignProduct';
import CampaignLocation from './CampaignLocation';

@Entity('campaigns')
class Campaign {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  begin_date: Date;

  @Column()
  end_date: Date;

  @Column({ default: false })
  is_open: boolean;

  @Column('decimal', { precision: 5, scale: 2 })
  available_value: number;

  @OneToMany(() => CampaignProduct, campaignProduct => campaignProduct.campaign)
  campaignsProducts: CampaignProduct[];

  @OneToMany(
    () => CampaignLocation,
    campaignLocation => campaignLocation.campaign
  )
  campaignsLocations: CampaignLocation[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Campaign;
