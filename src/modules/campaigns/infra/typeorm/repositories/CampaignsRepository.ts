import { getRepository, Repository } from 'typeorm';

import ICampaignsRepository from '@modules/campaigns/repositories/ICampaignsRepository';
import ICreateCampaignDTO from '@modules/campaigns/dtos/ICreateCampaignDTO';
import Campaign from '../entities/Campaign';

class CampaignsRepository implements ICampaignsRepository {
  private ormRepository: Repository<Campaign>;

  constructor() {
    this.ormRepository = getRepository(Campaign);
  }

  public async findAll(): Promise<Campaign[]> {
    const campaigns = await this.ormRepository.find();

    return campaigns;
  }

  public async findById(id: string): Promise<Campaign | undefined> {
    const campaign = await this.ormRepository.findOneOrFail({
      where: { id },
      relations: ['productsCampaigns']
    });

    return campaign;
  }

  public async create(
    data: Omit<ICreateCampaignDTO, 'products'>
  ): Promise<Campaign> {
    const campaign = this.ormRepository.create(data);

    await this.ormRepository.save(campaign);

    return campaign;
  }
}

export default CampaignsRepository;
