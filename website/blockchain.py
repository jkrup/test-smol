```python
from web3 import Web3

class Blockchain:
    def __init__(self):
        self.web3 = Web3(Web3.HTTPProvider('http://127.0.0.1:8545'))

    def buy_pixel(self, user, pixel):
        transaction = {
            'from': user.address,
            'to': pixel.owner,
            'value': self.web3.toWei(1, 'ether'),
            'gas': 2000000,
            'gasPrice': self.web3.toWei('50', 'gwei'),
        }

        return self.web3.eth.sendTransaction(transaction)

    def change_color(self, user, pixel, color):
        contract = self.web3.eth.contract(address=pixel.contract_address, abi=pixel.contract_abi)
        txn = contract.functions.changeColor(color).buildTransaction({
            'from': user.address,
            'nonce': self.web3.eth.getTransactionCount(user.address),
            'gas': 2000000,
            'gasPrice': self.web3.toWei('50', 'gwei'),
        })

        signed_txn = self.web3.eth.account.signTransaction(txn, user.private_key)
        return self.web3.eth.sendRawTransaction(signed_txn.rawTransaction)
```