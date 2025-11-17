import Card from '../../components/Card.jsx'
export default function Landing(){
  return (
    <div className="grid gap-6">
      <Card title="Hero"><div className="h-28 rounded bg-muted"/></Card>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card title="Value Prop"/><Card title="How it works"/><Card title="CTA"/>
      </div>
    </div>
  )
}
