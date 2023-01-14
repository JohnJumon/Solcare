export type Solcare = {
    version: '0.1.0';
    name: 'solcare';
    constants: [
        {
            name: 'CAMPAIGN_SEED';
            type: 'bytes';
            value: '[99, 97, 109, 112, 97, 105, 103, 110, 95, 115, 101, 101, 100]';
        },
        {
            name: 'CAMPAIGN_AUTHORITY_SEED';
            type: 'bytes';
            value: '[99, 97, 109, 112, 97, 105, 103, 110, 95, 97, 117, 116, 104, 111, 114, 105, 116, 121, 95, 115, 101, 101, 100]';
        },
        {
            name: 'DONOR_SEED';
            type: 'bytes';
            value: '[100, 111, 110, 111, 114, 95, 115, 101, 101, 100]';
        },
        {
            name: 'PROPOSAL_SEED';
            type: 'bytes';
            value: '[112, 114, 111, 112, 111, 115, 97, 108, 95, 115, 101, 101, 100]';
        },
        {
            name: 'VOTE_SEED';
            type: 'bytes';
            value: '[118, 111, 116, 101, 95, 115, 101, 101, 100]';
        },
        {
            name: 'STATUS_ACTIVE';
            type: 'u8';
            value: '0';
        },
        {
            name: 'STATUS_FILLED';
            type: 'u8';
            value: '1';
        },
        {
            name: 'STATUS_NOT_FILLED';
            type: 'u8';
            value: '2';
        },
        {
            name: 'STATUS_VOTING';
            type: 'u8';
            value: '3';
        },
        {
            name: 'STATUS_FUNDED';
            type: 'u8';
            value: '4';
        },
        {
            name: 'STATUS_NOT_FUNDED';
            type: 'u8';
            value: '5';
        },
        {
            name: 'VOTING_DURATION_IN_DAYS';
            type: 'u8';
            value: '3';
        },
        {
            name: 'USDC_MINT_PUBKEY';
            type: 'publicKey';
            value: 'Pubkey :: new_from_array ([104 , 146 , 249 , 200 , 170 , 10 , 89 , 118 , 166 , 205 , 86 , 177 , 177 , 71 , 178 , 18 , 149 , 129 , 244 , 116 , 13 , 216 , 69 , 146 , 239 , 73 , 202 , 144 , 19 , 110 , 8 , 4 ,])';
        },
        {
            name: 'USDC_DECIMALS';
            type: 'u8';
            value: '9';
        }
    ];
    instructions: [
        {
            name: 'initCampaign';
            accounts: [
                {
                    name: 'owner';
                    isMut: true;
                    isSigner: true;
                },
                {
                    name: 'campaign';
                    isMut: true;
                    isSigner: false;
                },
                {
                    name: 'campaignAuthority';
                    isMut: false;
                    isSigner: false;
                },
                {
                    name: 'usdcMint';
                    isMut: false;
                    isSigner: false;
                },
                {
                    name: 'campaignVault';
                    isMut: true;
                    isSigner: false;
                },
                {
                    name: 'clock';
                    isMut: false;
                    isSigner: false;
                },
                {
                    name: 'tokenProgram';
                    isMut: false;
                    isSigner: false;
                },
                {
                    name: 'associatedTokenProgram';
                    isMut: false;
                    isSigner: false;
                },
                {
                    name: 'systemProgram';
                    isMut: false;
                    isSigner: false;
                }
            ];
            args: [
                {
                    name: 'increment';
                    type: 'u32';
                },
                {
                    name: 'targetAmount';
                    type: 'u64';
                }
            ];
        },
        {
            name: 'initDonor';
            accounts: [
                {
                    name: 'authority';
                    isMut: true;
                    isSigner: true;
                },
                {
                    name: 'campaign';
                    isMut: false;
                    isSigner: false;
                },
                {
                    name: 'donor';
                    isMut: true;
                    isSigner: false;
                },
                {
                    name: 'clock';
                    isMut: false;
                    isSigner: false;
                },
                {
                    name: 'systemProgram';
                    isMut: false;
                    isSigner: false;
                }
            ];
            args: [
                {
                    name: 'campaignOwner';
                    type: 'publicKey';
                },
                {
                    name: 'index';
                    type: 'u32';
                }
            ];
        },
        {
            name: 'initProposal';
            accounts: [
                {
                    name: 'owner';
                    isMut: true;
                    isSigner: true;
                },
                {
                    name: 'campaign';
                    isMut: true;
                    isSigner: false;
                },
                {
                    name: 'proposal';
                    isMut: true;
                    isSigner: false;
                },
                {
                    name: 'clock';
                    isMut: false;
                    isSigner: false;
                },
                {
                    name: 'systemProgram';
                    isMut: false;
                    isSigner: false;
                }
            ];
            args: [
                {
                    name: 'index';
                    type: 'u32';
                }
            ];
        },
        {
            name: 'donate';
            accounts: [
                {
                    name: 'authority';
                    isMut: true;
                    isSigner: true;
                },
                {
                    name: 'campaign';
                    isMut: true;
                    isSigner: false;
                },
                {
                    name: 'campaignAuthority';
                    isMut: false;
                    isSigner: false;
                },
                {
                    name: 'usdcMint';
                    isMut: false;
                    isSigner: false;
                },
                {
                    name: 'campaignVault';
                    isMut: true;
                    isSigner: false;
                },
                {
                    name: 'donor';
                    isMut: true;
                    isSigner: false;
                },
                {
                    name: 'donorToken';
                    isMut: true;
                    isSigner: false;
                },
                {
                    name: 'clock';
                    isMut: false;
                    isSigner: false;
                },
                {
                    name: 'tokenProgram';
                    isMut: false;
                    isSigner: false;
                },
                {
                    name: 'associatedTokenProgram';
                    isMut: false;
                    isSigner: false;
                },
                {
                    name: 'systemProgram';
                    isMut: false;
                    isSigner: false;
                }
            ];
            args: [
                {
                    name: 'campaignOwner';
                    type: 'publicKey';
                },
                {
                    name: 'index';
                    type: 'u32';
                },
                {
                    name: 'amount';
                    type: 'u64';
                }
            ];
        },
        {
            name: 'voting';
            accounts: [
                {
                    name: 'authority';
                    isMut: true;
                    isSigner: true;
                },
                {
                    name: 'donor';
                    isMut: false;
                    isSigner: false;
                },
                {
                    name: 'vote';
                    isMut: true;
                    isSigner: false;
                },
                {
                    name: 'campaign';
                    isMut: false;
                    isSigner: false;
                },
                {
                    name: 'proposal';
                    isMut: true;
                    isSigner: false;
                },
                {
                    name: 'clock';
                    isMut: false;
                    isSigner: false;
                },
                {
                    name: 'systemProgram';
                    isMut: false;
                    isSigner: false;
                }
            ];
            args: [
                {
                    name: 'campaignOwner';
                    type: 'publicKey';
                },
                {
                    name: 'index';
                    type: 'u32';
                },
                {
                    name: 'agree';
                    type: 'bool';
                }
            ];
        },
        {
            name: 'claimFunds';
            accounts: [
                {
                    name: 'owner';
                    isMut: true;
                    isSigner: true;
                },
                {
                    name: 'campaign';
                    isMut: true;
                    isSigner: false;
                },
                {
                    name: 'campaignAuthority';
                    isMut: false;
                    isSigner: false;
                },
                {
                    name: 'usdcMint';
                    isMut: false;
                    isSigner: false;
                },
                {
                    name: 'campaignVault';
                    isMut: true;
                    isSigner: false;
                },
                {
                    name: 'proposal';
                    isMut: false;
                    isSigner: false;
                },
                {
                    name: 'ownerToken';
                    isMut: true;
                    isSigner: false;
                },
                {
                    name: 'clock';
                    isMut: false;
                    isSigner: false;
                },
                {
                    name: 'tokenProgram';
                    isMut: false;
                    isSigner: false;
                },
                {
                    name: 'associatedTokenProgram';
                    isMut: false;
                    isSigner: false;
                },
                {
                    name: 'systemProgram';
                    isMut: false;
                    isSigner: false;
                }
            ];
            args: [
                {
                    name: 'index';
                    type: 'u32';
                }
            ];
        },
        {
            name: 'refund';
            accounts: [
                {
                    name: 'authority';
                    isMut: true;
                    isSigner: true;
                },
                {
                    name: 'donor';
                    isMut: true;
                    isSigner: false;
                },
                {
                    name: 'donorToken';
                    isMut: true;
                    isSigner: false;
                },
                {
                    name: 'usdcMint';
                    isMut: false;
                    isSigner: false;
                },
                {
                    name: 'campaign';
                    isMut: false;
                    isSigner: false;
                },
                {
                    name: 'campaignAuthority';
                    isMut: false;
                    isSigner: false;
                },
                {
                    name: 'campaignVault';
                    isMut: true;
                    isSigner: false;
                },
                {
                    name: 'proposal';
                    isMut: false;
                    isSigner: false;
                },
                {
                    name: 'clock';
                    isMut: false;
                    isSigner: false;
                },
                {
                    name: 'tokenProgram';
                    isMut: false;
                    isSigner: false;
                },
                {
                    name: 'systemProgram';
                    isMut: false;
                    isSigner: false;
                }
            ];
            args: [
                {
                    name: 'campaignOwner';
                    type: 'publicKey';
                },
                {
                    name: 'index';
                    type: 'u32';
                }
            ];
        }
    ];
    accounts: [
        {
            name: 'campaign';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'owner';
                        type: 'publicKey';
                    },
                    {
                        name: 'createdAt';
                        type: 'i64';
                    },
                    {
                        name: 'heldDuration';
                        type: 'i64';
                    },
                    {
                        name: 'targetAmount';
                        type: 'u64';
                    },
                    {
                        name: 'fundedAmount';
                        type: 'u64';
                    },
                    {
                        name: 'campaignVault';
                        type: 'publicKey';
                    },
                    {
                        name: 'status';
                        type: 'u8';
                    }
                ];
            };
        },
        {
            name: 'donor';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'donor';
                        type: 'publicKey';
                    },
                    {
                        name: 'campaign';
                        type: 'publicKey';
                    },
                    {
                        name: 'donatedAmount';
                        type: 'u64';
                    },
                    {
                        name: 'updatedAt';
                        type: 'i64';
                    },
                    {
                        name: 'refunded';
                        type: 'bool';
                    }
                ];
            };
        },
        {
            name: 'proposal';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'campaign';
                        type: 'publicKey';
                    },
                    {
                        name: 'createdAt';
                        type: 'i64';
                    },
                    {
                        name: 'duration';
                        type: 'i64';
                    },
                    {
                        name: 'agree';
                        type: 'u64';
                    },
                    {
                        name: 'disagree';
                        type: 'u64';
                    },
                    {
                        name: 'updatedAt';
                        type: 'i64';
                    }
                ];
            };
        },
        {
            name: 'vote';
            type: {
                kind: 'struct';
                fields: [
                    {
                        name: 'proposal';
                        type: 'publicKey';
                    },
                    {
                        name: 'createdAt';
                        type: 'i64';
                    },
                    {
                        name: 'voter';
                        type: 'publicKey';
                    },
                    {
                        name: 'isAgree';
                        type: 'bool';
                    },
                    {
                        name: 'quantity';
                        type: 'u64';
                    }
                ];
            };
        }
    ];
    errors: [
        {
            code: 6000;
            name: 'InvalidHeldDuration';
            msg: 'Invalid held duration';
        },
        {
            code: 6001;
            name: 'InvalidTargetAmount';
            msg: 'Invalid target amount';
        },
        {
            code: 6002;
            name: 'CampaignIsNotActive';
            msg: 'Campaign is not active';
        },
        {
            code: 6003;
            name: 'CampaignFailedToRaiseFunds';
            msg: 'Campaign is failed to raise funds';
        },
        {
            code: 6004;
            name: 'CampaignIsNotFilled';
            msg: 'Campaign is not filled';
        },
        {
            code: 6005;
            name: 'CampaignIsNotInVotingPeriod';
            msg: 'Campaign is not in voting period';
        },
        {
            code: 6006;
            name: 'DonatedAmountGreaterThanTarget';
            msg: 'Donated amount greater than target';
        },
        {
            code: 6007;
            name: 'VotingHasNotEnd';
            msg: 'Voting has not end';
        },
        {
            code: 6008;
            name: 'CantClaimFund';
            msg: "Can't claim fund";
        },
        {
            code: 6009;
            name: 'CantDoRefund';
            msg: "Can't do refund";
        },
        {
            code: 6010;
            name: 'DonationHasBeenRefunded';
            msg: 'Donation has been refunded';
        },
        {
            code: 6011;
            name: 'BalanceIsNotEnough';
            msg: 'Balance is not enough';
        }
    ];
};

export const IDL: Solcare = {
    version: '0.1.0',
    name: 'solcare',
    constants: [
        {
            name: 'CAMPAIGN_SEED',
            type: 'bytes',
            value: '[99, 97, 109, 112, 97, 105, 103, 110, 95, 115, 101, 101, 100]',
        },
        {
            name: 'CAMPAIGN_AUTHORITY_SEED',
            type: 'bytes',
            value: '[99, 97, 109, 112, 97, 105, 103, 110, 95, 97, 117, 116, 104, 111, 114, 105, 116, 121, 95, 115, 101, 101, 100]',
        },
        {
            name: 'DONOR_SEED',
            type: 'bytes',
            value: '[100, 111, 110, 111, 114, 95, 115, 101, 101, 100]',
        },
        {
            name: 'PROPOSAL_SEED',
            type: 'bytes',
            value: '[112, 114, 111, 112, 111, 115, 97, 108, 95, 115, 101, 101, 100]',
        },
        {
            name: 'VOTE_SEED',
            type: 'bytes',
            value: '[118, 111, 116, 101, 95, 115, 101, 101, 100]',
        },
        {
            name: 'STATUS_ACTIVE',
            type: 'u8',
            value: '0',
        },
        {
            name: 'STATUS_FILLED',
            type: 'u8',
            value: '1',
        },
        {
            name: 'STATUS_NOT_FILLED',
            type: 'u8',
            value: '2',
        },
        {
            name: 'STATUS_VOTING',
            type: 'u8',
            value: '3',
        },
        {
            name: 'STATUS_FUNDED',
            type: 'u8',
            value: '4',
        },
        {
            name: 'STATUS_NOT_FUNDED',
            type: 'u8',
            value: '5',
        },
        {
            name: 'VOTING_DURATION_IN_DAYS',
            type: 'u8',
            value: '3',
        },
        {
            name: 'USDC_MINT_PUBKEY',
            type: 'publicKey',
            value: 'Pubkey :: new_from_array ([104 , 146 , 249 , 200 , 170 , 10 , 89 , 118 , 166 , 205 , 86 , 177 , 177 , 71 , 178 , 18 , 149 , 129 , 244 , 116 , 13 , 216 , 69 , 146 , 239 , 73 , 202 , 144 , 19 , 110 , 8 , 4 ,])',
        },
        {
            name: 'USDC_DECIMALS',
            type: 'u8',
            value: '9',
        },
    ],
    instructions: [
        {
            name: 'initCampaign',
            accounts: [
                {
                    name: 'owner',
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: 'campaign',
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: 'campaignAuthority',
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: 'usdcMint',
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: 'campaignVault',
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: 'clock',
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: 'tokenProgram',
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: 'associatedTokenProgram',
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: 'systemProgram',
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: 'increment',
                    type: 'u32',
                },
                {
                    name: 'targetAmount',
                    type: 'u64',
                },
            ],
        },
        {
            name: 'initDonor',
            accounts: [
                {
                    name: 'authority',
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: 'campaign',
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: 'donor',
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: 'clock',
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: 'systemProgram',
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: 'campaignOwner',
                    type: 'publicKey',
                },
                {
                    name: 'index',
                    type: 'u32',
                },
            ],
        },
        {
            name: 'initProposal',
            accounts: [
                {
                    name: 'owner',
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: 'campaign',
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: 'proposal',
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: 'clock',
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: 'systemProgram',
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: 'index',
                    type: 'u32',
                },
            ],
        },
        {
            name: 'donate',
            accounts: [
                {
                    name: 'authority',
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: 'campaign',
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: 'campaignAuthority',
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: 'usdcMint',
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: 'campaignVault',
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: 'donor',
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: 'donorToken',
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: 'clock',
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: 'tokenProgram',
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: 'associatedTokenProgram',
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: 'systemProgram',
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: 'campaignOwner',
                    type: 'publicKey',
                },
                {
                    name: 'index',
                    type: 'u32',
                },
                {
                    name: 'amount',
                    type: 'u64',
                },
            ],
        },
        {
            name: 'voting',
            accounts: [
                {
                    name: 'authority',
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: 'donor',
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: 'vote',
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: 'campaign',
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: 'proposal',
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: 'clock',
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: 'systemProgram',
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: 'campaignOwner',
                    type: 'publicKey',
                },
                {
                    name: 'index',
                    type: 'u32',
                },
                {
                    name: 'agree',
                    type: 'bool',
                },
            ],
        },
        {
            name: 'claimFunds',
            accounts: [
                {
                    name: 'owner',
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: 'campaign',
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: 'campaignAuthority',
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: 'usdcMint',
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: 'campaignVault',
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: 'proposal',
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: 'ownerToken',
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: 'clock',
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: 'tokenProgram',
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: 'associatedTokenProgram',
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: 'systemProgram',
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: 'index',
                    type: 'u32',
                },
            ],
        },
        {
            name: 'refund',
            accounts: [
                {
                    name: 'authority',
                    isMut: true,
                    isSigner: true,
                },
                {
                    name: 'donor',
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: 'donorToken',
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: 'usdcMint',
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: 'campaign',
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: 'campaignAuthority',
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: 'campaignVault',
                    isMut: true,
                    isSigner: false,
                },
                {
                    name: 'proposal',
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: 'clock',
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: 'tokenProgram',
                    isMut: false,
                    isSigner: false,
                },
                {
                    name: 'systemProgram',
                    isMut: false,
                    isSigner: false,
                },
            ],
            args: [
                {
                    name: 'campaignOwner',
                    type: 'publicKey',
                },
                {
                    name: 'index',
                    type: 'u32',
                },
            ],
        },
    ],
    accounts: [
        {
            name: 'campaign',
            type: {
                kind: 'struct',
                fields: [
                    {
                        name: 'owner',
                        type: 'publicKey',
                    },
                    {
                        name: 'createdAt',
                        type: 'i64',
                    },
                    {
                        name: 'heldDuration',
                        type: 'i64',
                    },
                    {
                        name: 'targetAmount',
                        type: 'u64',
                    },
                    {
                        name: 'fundedAmount',
                        type: 'u64',
                    },
                    {
                        name: 'campaignVault',
                        type: 'publicKey',
                    },
                    {
                        name: 'status',
                        type: 'u8',
                    },
                ],
            },
        },
        {
            name: 'donor',
            type: {
                kind: 'struct',
                fields: [
                    {
                        name: 'donor',
                        type: 'publicKey',
                    },
                    {
                        name: 'campaign',
                        type: 'publicKey',
                    },
                    {
                        name: 'donatedAmount',
                        type: 'u64',
                    },
                    {
                        name: 'updatedAt',
                        type: 'i64',
                    },
                    {
                        name: 'refunded',
                        type: 'bool',
                    },
                ],
            },
        },
        {
            name: 'proposal',
            type: {
                kind: 'struct',
                fields: [
                    {
                        name: 'campaign',
                        type: 'publicKey',
                    },
                    {
                        name: 'createdAt',
                        type: 'i64',
                    },
                    {
                        name: 'duration',
                        type: 'i64',
                    },
                    {
                        name: 'agree',
                        type: 'u64',
                    },
                    {
                        name: 'disagree',
                        type: 'u64',
                    },
                    {
                        name: 'updatedAt',
                        type: 'i64',
                    },
                ],
            },
        },
        {
            name: 'vote',
            type: {
                kind: 'struct',
                fields: [
                    {
                        name: 'proposal',
                        type: 'publicKey',
                    },
                    {
                        name: 'createdAt',
                        type: 'i64',
                    },
                    {
                        name: 'voter',
                        type: 'publicKey',
                    },
                    {
                        name: 'isAgree',
                        type: 'bool',
                    },
                    {
                        name: 'quantity',
                        type: 'u64',
                    },
                ],
            },
        },
    ],
    errors: [
        {
            code: 6000,
            name: 'InvalidHeldDuration',
            msg: 'Invalid held duration',
        },
        {
            code: 6001,
            name: 'InvalidTargetAmount',
            msg: 'Invalid target amount',
        },
        {
            code: 6002,
            name: 'CampaignIsNotActive',
            msg: 'Campaign is not active',
        },
        {
            code: 6003,
            name: 'CampaignFailedToRaiseFunds',
            msg: 'Campaign is failed to raise funds',
        },
        {
            code: 6004,
            name: 'CampaignIsNotFilled',
            msg: 'Campaign is not filled',
        },
        {
            code: 6005,
            name: 'CampaignIsNotInVotingPeriod',
            msg: 'Campaign is not in voting period',
        },
        {
            code: 6006,
            name: 'DonatedAmountGreaterThanTarget',
            msg: 'Donated amount greater than target',
        },
        {
            code: 6007,
            name: 'VotingHasNotEnd',
            msg: 'Voting has not end',
        },
        {
            code: 6008,
            name: 'CantClaimFund',
            msg: "Can't claim fund",
        },
        {
            code: 6009,
            name: 'CantDoRefund',
            msg: "Can't do refund",
        },
        {
            code: 6010,
            name: 'DonationHasBeenRefunded',
            msg: 'Donation has been refunded',
        },
        {
            code: 6011,
            name: 'BalanceIsNotEnough',
            msg: 'Balance is not enough',
        },
    ],
};
