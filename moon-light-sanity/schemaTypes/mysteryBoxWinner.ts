import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'mysteryBoxWinner',
  title: 'Mystery Box Winner',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'walletAddress',
      title: 'Wallet Address',
      type: 'string',
    }),

    defineField({
      name: 'profileImg',
      title: 'Profile Image',
      type: 'image',
      options: { hotspot: true },
    }),

    defineField({
      name: 'uid',
      title: 'User ID',
      type: 'string',
    }),

    defineField({
      name: 'personal',
      title: 'Personal',
      type: 'number',
      initialValue: 0,
    }),

    defineField({
      name: 'partner',
      title: 'Partner',
      type: 'number',
      initialValue: 0,
    }),

    defineField({
      name: 'totalTeam',
      title: 'Total Team',
      type: 'number',
      initialValue: 0,
    }),

    
  ],
});