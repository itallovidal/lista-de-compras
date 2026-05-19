export const DEFAULT_MARKET_NAME = 'Mercado não registrado.';

export const resolveMarketName = (marketName: string): string => {
  const trimmedMarketName = marketName.trim();

  return trimmedMarketName || DEFAULT_MARKET_NAME;
};
